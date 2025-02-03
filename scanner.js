const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Replace with your Have I Been Pwned API key
const HIBP_API_KEY = 'your-api-key-here';

app.use(express.static('public')); // Serve static files
app.use(express.json());

app.post('/check-email', async (req, res) => {
    const email = req.body.email;

    try {
        const response = await axios.get(https://haveibeenpwned.com/api/v3/breachedaccount/${email}, {
            headers: {
                'hibp-api-key': HIBP_API_KEY,
                'User-Agent': 'DarkWebScanner'
            }
        });

        if (response.data) {
            res.json({ breached: true, breaches: response.data });
        } else {
            res.json({ breached: false });
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.json({ breached: false });
        } else {
            res.status(500).json({ error: 'An error occurred while checking the email.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});