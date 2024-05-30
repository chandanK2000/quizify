const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctAnswer: Number,
  topic: String,
  set: Number
});

module.exports = mongoose.model('Question', questionSchema);
