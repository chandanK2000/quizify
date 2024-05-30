const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));
app.use(cors());
// Database connection
const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  console.log("Database connected successfully");

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
  global.isDatabaseConnected = false;
});

// User routes
const userRoutes = require('./routes/user');
const questionRoutes = require('./routes/questionRoutes');
app.use('/api/questions', questionRoutes);

app.use('/api/users', userRoutes);

const adminRoutes = require('./routes/adminRoutes.js');

// Admin routes
app.use('/api/admin', adminRoutes);
