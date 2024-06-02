const express = require('express');
const router = express.Router();
const quizResultController = require('../controllers/quizResultController');

router.post('/quizResults', quizResultController.saveQuizResult);

module.exports = router;
