import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Quiz from './Quiz';
import './QuizSetDetails.css'; 
import { RiArrowGoBackLine} from 'react-icons/ri';

const QuizSetDetails = () => {
  const { subjectName, quizSet } = useParams();
  const navigate = useNavigate();

  return (
    <div className="quiz-set-details-container">
      <h2 className="quiz-set-title">{subjectName.toUpperCase()} - Set {quizSet}</h2>
      <button className='back-btn' onClick={() => navigate(-1)}><RiArrowGoBackLine /> Back</button>

      <Quiz subjectName={subjectName} quizSet={parseInt(quizSet)} />
    </div>
  );
};

export default QuizSetDetails;
