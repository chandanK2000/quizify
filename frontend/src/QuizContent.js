import React from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa';
import './QuizContents.css';

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

  return (
    <div className='quizcontent-container'>
      <div className="quiz-content">
        <div className="question-header">
          <h5>{currentQuestionIndex + 1}. {currentQuestion.question}</h5>
          <span>{currentQuestionIndex + 1} / {questions.length}</span>
        </div>
        <ol>
          {currentQuestion.options.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              <label>
                {String.fromCharCode(65 + index)}-
                <input
                  type="radio"
                  name={`option-${currentQuestionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                &nbsp;  {option}
              </label>
            </li>
          ))}
        </ol>

        <div className="button-groupquiz">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FaChevronLeft />}
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleSubmit}
          >
            <FaCheck />    Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            endIcon={<FaChevronRight />}
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="vertical-stepper">
        <Stepper activeStep={currentQuestionIndex} orientation="vertical">
          {questions.map((question, index) => (
            <Step key={index}>
              <StepLabel >{`--Question -${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default QuizContent;
