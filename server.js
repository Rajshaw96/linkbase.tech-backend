require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const propertyRoutes = require('./routes/propertyRoutes');
const connectRoutes = require('./routes/connectRoutes');
const helmet = require('helmet');
const cors = require('cors'); // Add this line

const app = express();

// Connect to MongoDB
connectDB();

app.use(helmet());
app.use(express.json()); // Replacing bodyParser with Express's built-in middleware

// Configure CORS
const allowedOrigins = ['http://127.0.0.1:5500','https://linkbase.tech'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Route handling
app.use('/api/properties-details', propertyRoutes);
app.use('/api/user-connect', connectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
