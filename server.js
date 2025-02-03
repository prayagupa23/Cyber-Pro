const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/scan", async (req, res) => {
    const { email, phone } = req.body;

    if (!email || !phone) {
        return res.status(400).json({ message: "Email and phone number are required" });
    }

    try {
        // Simulate API call (Replace with actual dark web API request)
        const results = [
            { source: "Leaked Database 1", details: "Email compromised" },
            { source: "Leaked Database 2", details: "Phone number found in breach" }
        ];

        res.json({ results });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
