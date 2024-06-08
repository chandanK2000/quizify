import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./QuizHistory.css";
import { toast } from 'react-toastify';
import LoadingOverlay from './LoadingOverlay';

const QuizHistory = ({ userId }) => {
  const { subjectName, quizSet } = useParams();
  const [quizHistory, setQuizHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from sessionStorage
    const storedUserData = sessionStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const fetchQuizHistory = async () => {
    try {
      // Check if userData is available
      if (userData) {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/quizResults/${subjectName}/${quizSet}?userId=${userData.userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz history data');
        }
        const data = await response.json();
        // setQuizHistory(data.reverse());
        setQuizHistory(data);
        setLoading(false);
      }
    } catch (error) {
      // console.error('Error fetching quiz history:', error);
      setError('No Available Data of This Set is As Of Now');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizHistory();
  }, [subjectName, quizSet, userData]);

  const deleteQuizResult = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/quizResults?userId=${userData.userId}&subjectName=${subjectName}&quizSet=${quizSet}&_id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete quiz result');
      }
      // Refetch the updated quiz history from the server
      toast(`Quiz History of ${subjectName} and  set ${quizSet} Deleted successfully`);
      fetchQuizHistory();
    } catch (error) {
      console.error('Error deleting quiz result:', error);
      setError('No Available Date of This Set is As Of Now');
    }
  };

  return (
    <div className="quiz-history-container">
      <h2>Quiz History for {subjectName.toUpperCase()} - Set {quizSet}</h2>
      <button className='btn btn-primary' onClick={() => navigate(-1)}>Back</button>

      <div className="quiz-history-list">
        {loading ? (
          // <p>Loading...</p>
          <LoadingOverlay/>
        ) : error ? (
          <p>{error}</p>
        ) : (
          quizHistory.map((historyItem, index) => (
            <div key={historyItem._id} className="history-item">
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
                <button className='btn btn-primary' onClick={() => deleteQuizResult(historyItem._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QuizHistory;
