// QuizSetDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Quiz from './Quiz';


const QuizSetDetails = () => {
  const { subjectName, quizSet } = useParams();
  const navigate = useNavigate(); 

  return (
    <div>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>Back</button>

      <h2>{subjectName.toUpperCase()} - Set {quizSet}</h2>
      <Quiz subjectName={subjectName} quizSet={parseInt(quizSet)} />
    </div>
  );
};

export default QuizSetDetails;
