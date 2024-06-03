import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./QuizHistory.css"

const QuizHistory = ({ userId }) => {
  const { subjectName, quizSet } = useParams();
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Use navigate from useNavigate hook

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = sessionStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    const fetchQuizHistory = async () => {
      try {
        // Check if userData is available
        if (userData) {
          const response = await fetch(`http://localhost:4000/api/quizResults/${subjectName}/${quizSet}?userId=${userData.userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch quiz history data');
          }
          const data = await response.json();
          setQuizHistory(data.reverse());
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching quiz history:', error);
        setError('Failed to fetch quiz history data');
        setLoading(false);
      }
    };

    fetchQuizHistory();
  }, [subjectName, quizSet, userData]); // Include userData as a dependency

  const deleteQuizResult = () => {
    alert("Delete functionality to be implemented.");
  }

  return (
    <div className="quiz-history-container">
      <h2>Quiz History for {subjectName.toUpperCase()} - Set {quizSet}</h2>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>Back</button> {/* Navigate back on button click */}

      <div className="quiz-history-list">
        {quizHistory.map((historyItem, index) => (
          <div key={index} className="history-item">
            <div>
              <p><strong>Name:</strong> {historyItem.name}</p>
              <p><strong>Email:</strong> {historyItem.email}</p>
              <p><strong>Subject Name:</strong> {historyItem.subjectName}</p>
            </div>
            <div>
              <p><strong>Quiz Set:</strong> {historyItem.quizSet}</p>
              <p><strong>Total Questions:</strong> {historyItem.totalQuestions}</p>
              <p><strong>Correct Answers:</strong> {historyItem.correctAnswers}</p>
            </div>
            <div>
              <p><strong>Percentage Score:</strong> {historyItem.percentageScore}</p>
              <p><strong>Result Message:</strong> {historyItem.resultMessage}</p>
              <p><strong>Wrong Answers:</strong> {historyItem.wrongAnswers}</p>
            </div>
            <div>
              <p><strong>Date Time:</strong> {new Date(historyItem.dateTime).toLocaleString()}</p>
              <button className='btn btn-primary' onClick={deleteQuizResult}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHistory;
