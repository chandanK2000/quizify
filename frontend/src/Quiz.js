import React, { useState, useEffect } from 'react';
import './Quiz.css';
import QuizContent from './QuizContent';
import QuizResult from './QuizResult';
import { FaPlay } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ subjectName, quizSet }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const handleSubmit = () => {
    const confirmed = window.confirm("Are you sure you want to submit the quiz?");
    if (confirmed) {
      const finalScore = questions.reduce((acc, question) => {
        if (question.selectedOption === question.answer) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(finalScore);
      setQuizCompleted(true);
      toast.success('Quiz completed successfully!'); // Display toast message
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
  };

  const startQuiz = () => {
    if (agreeChecked) {
      setQuizStarted(true);
    } else {
      alert("Please agree to the terms and conditions before starting the quiz.");
    }
  };

  const handleAgreeChange = () => {
    setAgreeChecked(!agreeChecked);
  };

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
        <QuizContent
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          selectedOption={selectedOption}
          handleOptionSelect={handleOptionSelect}
          handlePreviousQuestion={handlePreviousQuestion}
          handleSubmit={handleSubmit}
          handleNextQuestion={handleNextQuestion}
        />
      )}
      {quizCompleted && !loading && questions.length > 0 && (
        <QuizResult
          score={score}
          totalQuestions={questions.length}
          questions={questions}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
