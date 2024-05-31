import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine, RiPlayFill, RiHistoryLine } from 'react-icons/ri';
import './QuizSet.css'; 

const QuizSet = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();

  // Log the subjectName to the console
  useEffect(() => {
    console.log('Subject Name:', subjectName);
  }, [subjectName]);

  // Define quiz sets for each subject
  const quizSets = {
    html: [1, 2, 3, 4, 5, 6, 7],
    css: [1, 2, 3, 4, 5, 6, 7],
    javascript: [1, 2, 3],
    react: [1, 2, 3],
   
  };

  return (
    <div className="quiz-set-container">
      <h2 className="quiz-set-title">{subjectName.toUpperCase()} Quiz Sets</h2>
      <button className="btn btn-primary back-btn" onClick={() => navigate(-1)}>
        <RiArrowGoBackLine /> Back
      </button>
      <div className="quiz-set-list">
        {quizSets[subjectName].map((set) => (
          <div key={set} className="quiz-set-item">
            <Link to={`/free-quizzes/${subjectName}/set/${set}`}>
              <button className="set-btn">Set {set}</button>
            </Link>
            <div className="button-group">
              <Link to={`/free-quizzes/${subjectName}/set/${set}`}>
                <button className="custom-btn"><RiPlayFill />Play Again </button>
              </Link>
              <Link to={`/quiz-history/${subjectName}/set/${set}`}>
                <button className="custom-btn"><RiHistoryLine /> View History</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSet;
