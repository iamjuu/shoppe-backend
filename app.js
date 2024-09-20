const express = require('express');
const app = express();

// Middleware to handle JSON requests
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Server setup

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});












