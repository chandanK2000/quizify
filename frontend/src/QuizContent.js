import React from 'react';
import './QuizContents.css';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import Stepper from 'react-stepper-horizontal';

const QuizContent = ({
  questions,
  currentQuestionIndex,
  selectedOption,
  handleOptionSelect,
  handlePreviousQuestion,
  handleSubmit,
  handleNextQuestion
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  // Creating steps for the Stepper component
  const steps = questions.map((_, index) => ({
    title: `Question ${index + 1}`,
  }));

  return (
    <div className='quizcontent-container'>
      <div className="quiz-content">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="question-header">
          <h5>{currentQuestionIndex + 1}. {currentQuestion.question}</h5>
          <span>{currentQuestionIndex + 1} / {questions.length}</span>
        </div>
        <ol>
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ol>
        <div className="button-groupquiz">
          <button
            className="btn btn-secondary"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <FaChevronLeft /> Prev
          </button>
          <button
            className="btn btn-warning"
            onClick={handleSubmit}
            disabled={currentQuestionIndex === questions.length && selectedOption === ''}
          >
            <FaCheck /> Submit
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            <FaChevronRight /> Next
          </button>
        </div>
      </div>
      <div className="quiz-progress">
        <Stepper
          steps={steps}
          activeStep={currentQuestionIndex}
          activeColor="#007bff"
          completeColor="#28a745"
          circleFontColor="#fff"
          direction="horizontal"

        />
      </div>
    </div>
  );
};

export default QuizContent;
