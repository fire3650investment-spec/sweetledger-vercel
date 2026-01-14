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

    // List of models to try in order of preference (updated 2026-01)
    // See: https://ai.google.dev/gemini-api/docs/models/gemini
    const modelsToTry = ["gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];

    let allErrors = [];

    for (const modelName of modelsToTry) {
        try {
            console.log(`🤖 Attempting to generate with model: ${modelName}`);
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelName });

            let result;
            if (imageBase64) {
                // gemini-1.0-pro does not support images
                if (modelName === "gemini-1.0-pro" || modelName === "gemini-pro") {
                    console.log(`⚠️ Fallback to ${modelName}: Image input ignored.`);
                    result = await model.generateContent(`${prompt}\n(Note: Image analysis skipped as fallback model ${modelName} was used)`);
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
            allErrors.push(`${modelName}: ${error.message}`);
        }
    }

    console.error("🚨 All model attempts failed.");
    return res.status(500).json({
        error: "All models failed",
        details: allErrors.join(" | "),
        help: "Please check Vercel Environment Variables (GEMINI_API_KEY). Ensure the key is valid and has access to Generative Language API."
    });
}
