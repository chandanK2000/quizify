import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const QuizSet = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate(); 

 
  // Log the subjectName to the console
  useEffect(() => {
    console.log('Subject Name:', subjectName);
  }, [subjectName]);

  // Define quiz sets for each subject
  const quizSets = {
    html: [1, 2, 3], 
    css: [1, 2, 3],
    javascript: [1, 2, 3],
    react: [1, 2, 3], 
   
  };

  return (
    <div>
      <h2>{subjectName.toUpperCase()} Quiz Sets</h2>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>Back</button>
      <div className='d-flex'>
        {quizSets[subjectName].map((set) => (
          <div key={set}>
            <Link to={`/free-quizzes/${subjectName}/set/${set}`}>
              <button className='btn btn-primary m-2'>Set {set}</button>
            </Link></div>
        ))}
      </div>
    </div>
  );
};

export default QuizSet;
