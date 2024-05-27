const express = require('express');
const mongoose = require('mongoose');
// const emoji = require('node-emoji');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 4000; 

// Database connection
const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  // console.log("wow, Database connected successfully " + emoji.get('laughing'));
  console.log("wow, Database connected successfully \uD83D\uDE02");

 

  app.listen(port, () => {
    console.log(`Server is running on  port ${port}`);
  });
}).catch((error) => {
  console.error("Database connection failed:", error);
  global.isDatabaseConnected = false;
});
