// questionRoutes.js

const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// POST /api/questions - Create a new question
router.post('/', questionController.createQuestion);
router.get('/', questionController.getQuestionsBySubjectAndSet);
router.delete('/:id', questionController.deleteQuestionById);

module.exports = router;
