const QuizResult = require('../models/QuizResult');

exports.saveQuizResult = async (req, res) => {
  try {
    // Extract data from request body
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

    // Create a new QuizResult instance
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

    // Log the received data
    console.log('Received data:', req.body);

    // Save the quiz result to the database
    await quizResult.save();

    // Log the saved quiz result
    console.log('Quiz result saved successfully:', quizResult);

    // Respond with success message
    res.status(201).json({ message: 'Quiz result saved successfully.' });
  } catch (error) {
    // Log detailed error message
    console.error('Error saving quiz result:', error);

    // Respond with error message
    res.status(500).json({ message: 'Internal server error. Failed to save quiz result.' });
  }
};
