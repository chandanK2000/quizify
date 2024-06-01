// controllers/quizResultController.js

const QuizResult = require('../models/QuizResult');

exports.saveQuizResult = async (req, res) => {
  try {
    const {
      userId,
      subjectName,
      quizSet,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentageScore,
      resultMessage,
      dateTime,
      name,
      email
    } = req.body;

    const quizResult = new QuizResult({
      userId,
      subjectName,
      quizSet,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentageScore,
      resultMessage,
      dateTime,
      name,
      email
    });

    await quizResult.save();

    res.status(201).json({ message: 'Quiz result saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};
