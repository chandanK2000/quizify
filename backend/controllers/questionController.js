
const Question = require('../models/question');

// Controller function to create a new question
exports.createQuestion = async (req, res) => {
  try {
    // Extract question data from request body
    const { text, options, correctAnswer, topic, set } = req.body; 

    // Create a new question document
    const newQuestion = new Question({
      text,
      options,
      correctAnswer,
      topic, 
      set
    });

    // Save the new question to the database
    await newQuestion.save();

    // Send a success response
    res.status(201).json({ message: 'Question created successfully', question: newQuestion });
  } catch (error) {
    console.error('Error creating question:', error);
    // Send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
};


//get 

exports.getQuestionsBySubjectAndSet = async (req, res) => {
  try {
    const { subject, set } = req.query; 
   
    const questions = await Question.find({ topic: subject, set: parseInt(set) }); 
    res.json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//delete

exports.deleteQuestionById = async (req, res) => {
  try {
    const { id } = req.params; // Extract question ID from URL parameters
    // Find the question by ID and delete it
    const deletedQuestion = await Question.findOneAndDelete({ _id: id });
    if (!deletedQuestion) {
      // If the question with the specified ID was not found, send a 404 Not Found response
      return res.status(404).json({ error: 'Question not found' });
    }
    // Send a success response
    res.json({ message: 'Question deleted successfully', question: deletedQuestion });
  } catch (error) {
    console.error('Error deleting question:', error);
    // Send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
};