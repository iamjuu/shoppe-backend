const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const UserRouter = require('./Router/users/AuthRouter');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to handle CORS
app.use(cors());

// Middleware to handle JSON requests
app.use(express.json());

// Mount the router
app.use('/', UserRouter);

// Middleware for handling 404 (route not found)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
