// api/exchange-rates.js
export default async function handler(req, res) {
    // CORS Support
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { currency } = req.query;

    if (!currency) {
        return res.status(400).json({ error: 'Missing currency parameter' });
    }

    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Server Config Error: Missing API Key' });
    }

    try {
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currency}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.result !== 'success') {
            throw new Error(data['error-type'] || 'API Error');
        }

        // Cache Control: Cache for 1 hour
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

        return res.status(200).json({
            rate: data.conversion_rates.TWD, // We mostly care about TWD rate
            rates: data.conversion_rates     // Return all just in case
        });

    } catch (error) {
        console.error("Exchange Rate API Error:", error);
        return res.status(500).json({ error: 'Failed to fetch rates' });
    }
}
