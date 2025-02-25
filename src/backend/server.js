require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

//  Secure API Key (Stored in `.env` file)
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = process.env.COINGECKO_API_KEY; // Keep this secret!

// Fetch Cryptocurrency Data
app.get('/api/currency', async (req, res) => {
    try {
        const { vs_currency } = req.query;
        const response = await axios.get(`${COINGECKO_API_URL}/coins/markets`, {
            params: { vs_currency, order: 'market_cap_desc', sparkline: false },
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching cryptocurrency data' });
    }
});

//  Fetch Graphical Data
app.get('/api/graphical/:coinId', async (req, res) => {
    try {
        const { coinId } = req.params;
        const { vs_currency, days } = req.query;
        const response = await axios.get(`${COINGECKO_API_URL}/coins/${coinId}/market_chart`, {
            params: { vs_currency, days },
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching graphical data' });
    }
});

//  Fetch Cryptocurrency by ID
app.get('/api/coin/:coinId', async (req, res) => {
    try {
        const { coinId } = req.params;
        const response = await axios.get(`${COINGECKO_API_URL}/coins/${coinId}`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching coin data' });
    }
});

//  Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
