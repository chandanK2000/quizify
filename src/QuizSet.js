// import React, { useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { RiArrowGoBackLine, RiPlayFill, RiHistoryLine } from 'react-icons/ri';
// import './QuizSet.css';

// const QuizSet = () => {
//   const { subjectName } = useParams();
//   const navigate = useNavigate();

//   // Log the subjectName to the console
//   useEffect(() => {
//     console.log('Subject Name:', subjectName);
//   }, [subjectName]);

//   // Define quiz sets for each subject
//   const quizSets = {
//     html: [1, 2, 3,4,5,6,7],
//     css: [1, 2, 3],
//     javascript: [1, 2, 3],
//     // react: [1, 2, 3],
//     // bootstrap: [1, 2, 3],
//   };

//   // Check if subjectName exists in quizSets
//   if (!quizSets.hasOwnProperty(subjectName)) {
//     return (
//       <div className="quiz-set-container">
//         <h2 className="quiz-set-title">No Quiz Sets Available for {subjectName.toUpperCase()}</h2>
//         <button className="btn btn-primary back-btn" onClick={() => navigate(-1)}>
//           <RiArrowGoBackLine /> Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-set-container">
//       <h2 className="quiz-set-title">{subjectName.toUpperCase()} Quiz Sets</h2>
//       <button className="btn btn-primary back-btn" onClick={() => navigate(-1)}>
//         <RiArrowGoBackLine /> Back
//       </button>
//       <div className="quiz-set-list">
//         {quizSets[subjectName].map((set) => (
//           <div key={set} className="quiz-set-item">
//             <Link to={`/free-quizzes/${subjectName}/set/${set}`}>
//               <button className="set-btn">Set {set}</button>
//             </Link>
//             <div className="button-group">
//               <Link to={`/free-quizzes/${subjectName}/set/${set}`}>
//                 <button className="custom-btn"><RiPlayFill />Play Again </button>
//               </Link>
//               <Link to={`/quiz-history/${subjectName}/set/${set}`}>
//                 <button className="custom-btn"><RiHistoryLine /> View History</button>
//               </Link>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuizSet;

import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine, RiPlayFill, RiHistoryLine } from 'react-icons/ri';
import './QuizSet.css';
import { toast } from 'react-toastify';

const QuizSet = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Log the subjectName to the console
  useEffect(() => {
    console.log('Subject Name:', subjectName);
  }, [subjectName]);

  // Check if user is logged in
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    setIsLoggedIn(userData ? true : false);
  }, []);



  // Handle click on quiz set
  const handleQuizSetClick = (set) => {
    if (!isLoggedIn) {
      // alert('Please login to access the quiz sets');
      toast.success('Please login to access the quiz sets')
      // navigate('/login');
    } else {
      navigate(`/free-quizzes/${subjectName}/set/${set}`);
    }
  };

  // Define quiz sets for each subject
  const quizSets = {
    html: [1, 2, 3, 4, 5],
    css: [1, 2, 3,4,5],
    javascript: [1, 2, 3,4,5],
    // react: [1, 2, 3],
    // bootstrap: [1, 2, 3],
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
            <button className="set-btn" onClick={() => handleQuizSetClick(set)}>
              Set {set}
            </button>
            <div className="button-group">
              <button className="custom-btn" onClick={() => handleQuizSetClick(set)} disabled={!isLoggedIn}>
                <RiPlayFill /> Play Again
              </button>
              <Link to={`/quiz-history/${subjectName}/set/${set}`}>
                <button className="custom-btn" disabled={!isLoggedIn}><RiHistoryLine /> View History</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSet;
