
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
});

const userRoutes = require('./routes/userRoutes.js');
const questionRoutes = require('./routes/questionRoutes');

app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/quiz-result', quizResultRoutes);

const adminRoutes = require('./routes/adminRoutes.js');
app.use('/api/admin', adminRoutes);
