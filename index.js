
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const CONFIG = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://your-mongodb-uri'
};

async function startServer() {
  try {
    await mongoose.connect(CONFIG.MONGO_URI);
    console.log('Connected to MongoDB');
    
    app.use(express.json());
    
    app.get('/', (req, res) => {
      res.json({ status: 'ok' });
    });

    app.listen(CONFIG.PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${CONFIG.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
