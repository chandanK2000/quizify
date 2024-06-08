import React, { useState, useEffect } from 'react';
import './QuizResult.css';
import {useParams} from "react-router-dom";
import { FaRedo, FaDownload, FaLaugh, FaEye, FaEyeSlash, FaCheckCircle, FaTimesCircle, FaSave } from 'react-icons/fa';
import {Button } from '@mui/material';
import { toast } from 'react-toastify';

const QuizResult = ({ score, totalQuestions, questions, restartQuiz }) => {
  const [showReview, setShowReview] = useState(true);
  const [userData, setUserData] = useState(null);
  const { subjectName, quizSet } = useParams();
  const [showResultBlock, setShowResultBlock] = useState(true); 

  const toggleResultBlock = () => {
    setShowResultBlock(!showResultBlock);
  };
  useEffect(() => {
    console.log("Subject Name:", subjectName);
    console.log("Set:", quizSet);
    // alert(`Set: ${quizSet}`);
  }, [subjectName, quizSet]);


  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = sessionStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  

  const toggleReview = () => {
    setShowReview(!showReview);
  };

  // Calculate percentage score, correct percentage, and wrong percentage
  const percentageScore = (score / totalQuestions) * 100;
  const correctPercentage = (score / totalQuestions) * 100;
  const wrongAnswers = totalQuestions - score;
  const wrongPercentage = (wrongAnswers / totalQuestions) * 100;

  // Function to determine the result message based on percentage score
  const getResultMessage = (percentage) => {
    if (percentage >= 60) {
      return "Congratulations! You did very well.";
    } else if (percentage >= 45 && percentage < 60) {
      return "Good job! Keep it up -(First Division)";
    } else if (percentage >= 30 && percentage < 45) {
      return "You can improve. Keep practicing - (Second Division)";
    } else {
      return "You need to work harder - (Third Division)";
    }
  };

  // Function to download the quiz result
  const downloadResult = () => {
    const resultData = `
      Quiz Result:
      Total Questions: ${totalQuestions}
      Correct Answers: ${score} (${correctPercentage.toFixed(2)}%)
      Wrong Answers: ${wrongAnswers} (${wrongPercentage.toFixed(2)}%)
      Percentage Score: ${percentageScore.toFixed(2)}%
      Result: ${getResultMessage(percentageScore)}
      Name: ${userData ? userData.name : "Unknown"}
      Email: ${userData ? userData.email : "Unknown"}
    `;

    const blob = new Blob([resultData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'quiz_result.txt';

    link.click();
    window.URL.revokeObjectURL(link.href);
    toast.success('Result downloaded successfully!');

  };

  // Function to save the quiz history
  // const saveHistory = () => {
  //   const dateTime = new Date().toLocaleString();
  //   const historyData = `
  //     Quiz Result:
  //     Total Questions: ${totalQuestions}
  //     Correct Answers: ${score} (${correctPercentage.toFixed(2)}%)
  //     Wrong Answers: ${wrongAnswers} (${wrongPercentage.toFixed(2)}%)
  //     Percentage Score: ${percentageScore.toFixed(2)}%
  //     Result: ${getResultMessage(percentageScore)}
  //     Date and Time: ${dateTime}
  //     Name: ${userData ? userData.name : "Unknown"}
  //     Email: ${userData ? userData.email : "Unknown"}
  //   `;
  //   alert(historyData);
  // };
  // Function to save the quiz history
  // Function to save the quiz history
  const saveHistory = async () => {
    const dateTime = new Date().toLocaleString();
    const resultMessage = getResultMessage(percentageScore); // Calculate result message
    const historyData = {
      subjectName,
      quizSet,
      totalQuestions,
      correctAnswers: score,
      wrongAnswers,
      percentageScore: percentageScore.toFixed(2),
      result: resultMessage,
      resultMessage: resultMessage, 
      dateTime,
      name: userData ? userData.name : "Unknown",
      email: userData ? userData.email : "Unknown",
      userId: userData ? userData.userId : "Unknown",
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/quizResults`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(historyData)
      });

      if (!response.ok) {
        throw new Error('Failed to save quiz history');
      }
      toast.success('Quiz history saved successfully!');
    } catch (error) {
      console.error('Error saving quiz history:', error.message);
      alert('Failed to save quiz history. Please try again later.');
    }
  };



  return (
    <div className="quiz-result-container">
      <div className='result_block'>
        <button className="btn btn-primary m-2" onClick={toggleReview}>
          {showReview ? <><FaEyeSlash /> Hide Review</> : <><FaEye /> Show Review</>}
        </button>
        {showReview && (
          <div className="questions-review">
            {questions.map((question, index) => (
              <div key={index} className="question-review">
                <h5>{index + 1}. {question.question}</h5>
                <p>Your Answer: {question.selectedOption}</p>
                <p>Correct Answer: {question.answer}</p>
                <p className="feedback">
                  {question.selectedOption === question.answer ? <><FaCheckCircle /> Correct</> : <><FaTimesCircle /> Incorrect</>}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='result_block'>
        <h2 className='text-info'> Quiz Completed !<FaLaugh /></h2>
        <div className="buttons">
          <button className="btn btn-success m-2" onClick={restartQuiz}><FaRedo /> Restart Quiz</button>
          <button className="btn btn-success m-2" onClick={downloadResult}><FaDownload /> Download Result</button>
          <Button variant="contained" onClick={saveHistory}> <FaSave />  Save History </Button>
          <Button variant="contained" onClick={toggleResultBlock}>
              {showResultBlock ?  <> <FaEyeSlash />  Hide Result </> : <> <FaEye />  Show Result </>}
          </Button>
        </div>

        {showResultBlock && (
          <div className='resultblock'>
            <div>
              <p>Subject: {subjectName}</p>
              <p>Set: {quizSet}</p>
              <p>Total Questions: {totalQuestions}</p>
              <p>Correct Answers: {score} ({correctPercentage.toFixed(2)}%)</p>
              <p>Wrong Answers: {wrongAnswers} ({wrongPercentage.toFixed(2)}%)</p>
            </div>
            <div>
              <p>Date and Time: {new Date().toLocaleString()}</p>
              <p>Name: {userData ? userData.name : "Unknown"}</p>
              <p>Email: {userData ? userData.email : "Unknown"}</p>
              <p>Percentage Score: {percentageScore.toFixed(2)}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizResult;

// !C29jA5vHPW!CR -
