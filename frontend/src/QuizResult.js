import React from 'react';
import './QuizResult.css'; 
import {FaRedo } from 'react-icons/fa';

const QuizResult = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="quiz-result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button className="btn btn-success m-2" onClick={restartQuiz}><FaRedo /> Restart Quiz</button>
    </div>
  );
};

export default QuizResult;
