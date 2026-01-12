import { GoogleGenerativeAI } from "@google/generative-ai";
import { verifyAuth } from './_auth.js';

export default async function handler(req, res) {
    // CORS Support for local dev
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // [Security] Verify Firebase ID Token
    try {
        await verifyAuth(req);
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const { prompt, imageBase64 } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Server Config Error: Missing API Key' });
    }

    // List of models to try in order of preference
    const modelsToTry = ["gemini-1.5-pro", "gemini-1.5-flash", "gemini-pro"];

    let lastError = null;

    for (const modelName of modelsToTry) {
        try {
            console.log(`🤖 Attempting to generate with model: ${modelName}`);
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelName });

            let result;
            if (imageBase64) {
                // gemini-pro (1.0) does not support images
                if (modelName === "gemini-pro") {
                    console.log("⚠️ Fallback to gemini-pro: Image input ignored.");
                    result = await model.generateContent(`${prompt}\n(Note: Image analysis skipped as fallback model gemini-pro was used)`);
                } else {
                    const imagePart = {
                        inlineData: {
                            data: imageBase64,
                            mimeType: "image/jpeg"
                        }
                    };
                    result = await model.generateContent([prompt, imagePart]);
                }
            } else {
                result = await model.generateContent(prompt);
            }

            const text = result.response.text();
            console.log(`✅ Success with model: ${modelName}`);
            return res.status(200).json({ text, usedModel: modelName });

        } catch (error) {
            console.warn(`❌ Failed with model ${modelName}:`, error.message);
            lastError = error;
            // Continue to next model...
        }
    }

    // If all failed, try to list available models for debugging
    try {
        /* 
           Note: listing models might also fail if scope is restricted, 
           but it's worth a try for debugging 404s 
        */
        console.log("🔍 All attempts failed. listing available models...");
        // This is a placeholder as the current SDK usage for listModels might vary or require different client setup.
        // We will stick to returning the last error with a hint.
    } catch (e) { /* ignore */ }

    console.error("🚨 All model attempts failed.");
    return res.status(500).json({
        error: `All models failed. Last error: ${lastError?.message}`,
        details: "Please check Vercel Environment Variables. Your API Key might be invalid or has not been propagated to the server yet."
    });
}
