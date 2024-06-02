import React, { useState, useEffect } from 'react';
import './Quiz.css';
import QuizContent from './QuizContent';
import QuizResult from './QuizResult';
import { FaPlay } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { Button } from '@mui/material';

const Quiz = ({ subjectName, quizSet }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer, setTimer] = useState(600); // 1 minute in seconds
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const notificationAudio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/questions/${subjectName}/set${quizSet}`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        console.log(data);
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Handle error fetching questions
      }
    };

    fetchQuestions();
  }, [subjectName, quizSet]);

  useEffect(() => {
    // Set the selected option when loading a question
    if (questions.length > 0) {
      setSelectedOption(questions[currentQuestionIndex]?.selectedOption || '');
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    setIsLoggedIn(userData ? true : false);
  }, []);

  useEffect(() => {
    // Start the timer when quiz is started
    let interval;
    if (quizStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      // Quiz time is up, submit quiz automatically
      handleSubmit(true);
    }

    // Clear interval on component unmount or when quiz is completed
    return () => clearInterval(interval);
  }, [quizStarted, timer]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Update the selected option in the question data
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].selectedOption = option;
    setQuestions(updatedQuestions);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = (isAutomatic = false) => {
    if (isAutomatic || window.confirm("Are you sure you want to submit the quiz?")) {
      const finalScore = questions.reduce((acc, question) => {
        if (question.selectedOption === question.answer) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(finalScore);
      setQuizCompleted(true);
      toast.success('Quiz completed successfully!'); // Display toast message
      notificationAudio.play(); // Play notification sound after submitting quiz
      setTimeout(() => {
        notificationAudio.pause();
      }, 3000);
    }
  };

  const restartQuiz = () => {
    const resetQuestions = questions.map(question => ({ ...question, selectedOption: '' }));
    setQuestions(resetQuestions);
    setCurrentQuestionIndex(0);
    setSelectedOption('');
    setScore(0);
    setQuizCompleted(false);
    setQuizStarted(true);
    setTimer(600); // Reset timer to 1 minute
  };

  const startQuiz = () => {
    if (agreeChecked) {
      if (isLoggedIn) {
        setQuizStarted(true);
      } else {
        toast("Please log in to start the quiz.");
        // Navigate to login page or show login modal
      }
    } else {
      alert("Please agree to the terms and conditions before starting the quiz.");
    }
  };

  const handleAgreeChange = () => {
    setAgreeChecked(!agreeChecked);
  };

  const openPalette = () => {
    setIsPaletteOpen(true);
  };

  const closePalette = () => {
    setIsPaletteOpen(false);
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
    closePalette();
  };

  // Convert remaining time to minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className='main_containers'>
      {!quizStarted && !loading && (
        <div className="quizcontainers">
          <div className="instructions">
            <h4>Instructions:</h4>
            <div className='instruction_list'>
              <ul>
                <li>Read each question carefully before selecting your answer.</li>
                <li>Answer all questions to the best of your ability.</li>
                <li>Make sure to review your answers before submitting the quiz.</li>
              </ul>
            </div>
          </div>
          <div className="agree-checkbox">
            <label>
              <input
                type="checkbox"
                checked={agreeChecked}
                onChange={handleAgreeChange}
              />
              I agree to the terms and conditions
            </label>
          </div>
          <button className="btn btn-primary m-2" onClick={startQuiz} disabled={!agreeChecked}>
            <FaPlay /> Start Quiz
          </button>
        </div>
      )}
      {quizStarted && !quizCompleted && !loading && questions.length > 0 && (
        <div>
          <div className="timer-container">
            <div>Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
            <button className="btn btn-secondary palette-button" onClick={openPalette}>
              Show Palette
            </button>
          </div>
          <QuizContent
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            selectedOption={selectedOption}
            handleOptionSelect={handleOptionSelect}
            handlePreviousQuestion={handlePreviousQuestion}
            handleSubmit={() => handleSubmit(false)}
            handleNextQuestion={handleNextQuestion}
          />
        </div>
      )}
      {quizCompleted && !loading && questions.length > 0 && (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      )}
      <Modal
        isOpen={isPaletteOpen}
        onRequestClose={closePalette}
        contentLabel="Question Palette"
        className="palette-modal"
        overlayClassName="palette-overlay"
      >
        <Button onClick={closePalette} className="close-button"  variant='contained'>X</Button>

        <h3 className="headingpalatte">Question Palette</h3>
        <div className="palette-questions">
          {questions.map((question, index) => (
            <div key={index} className="palette-question" onClick={() => handleQuestionClick(index)}>
              <span>
                {index + 1}{question.selectedOption ? String.fromCharCode(65 + question.options.indexOf(question.selectedOption)) : ''}
              </span>
              {!question.selectedOption && <div className="blankfill"></div>}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
