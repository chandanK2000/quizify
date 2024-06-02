import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./QuizHistory.css"
const QuizHistory = () => {
  const { subjectName, set } = useParams();
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    // Fetch quiz history data for the specified subjectName and set
    const fetchQuizHistory = async () => {
      try {
        const response = await fetch(`/api/quiz-history/${subjectName}/set/${set}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz history data');
        }
        const data = await response.json();
        setQuizHistory(data);
      } catch (error) {
        console.error('Error fetching quiz history:', error);
        // Handle error, show error message to user, etc.
      }
    };

    fetchQuizHistory();
  }, [subjectName, set]);

  return (
    <div className="quiz-history-container">
      <h2>Quiz History for {subjectName.toUpperCase()} - Set {set}</h2>
      <div className="quiz-history-list">
        {quizHistory.map((historyItem) => (
          <div key={historyItem.id} className="history-item">
            <div>
              <strong>Subject Name:</strong> {historyItem.subjectName}
            </div>
            <div>
              <strong>Quiz Set:</strong> {historyItem.quizSet}
            </div>
            <div>
              <strong>Total Questions:</strong> {historyItem.totalQuestions}
            </div>
            <div>
              <strong>Correct Answers:</strong> {historyItem.correctAnswers}
            </div>
            <div>
              <strong>Wrong Answers:</strong> {historyItem.wrongAnswers}
            </div>
            <div>
              <strong>Percentage Score:</strong> {historyItem.percentageScore}
            </div>
            <div>
              <strong>Result Message:</strong> {historyItem.resultMessage}
            </div>
            <div>
              <strong>Date Time:</strong> {new Date(historyItem.dateTime).toLocaleString()}
            </div>
            <div>
              <strong>Name:</strong> {historyItem.name}
            </div>
            <div>
              <strong>Email:</strong> {historyItem.email}
            </div>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );



};

export default QuizHistory;
