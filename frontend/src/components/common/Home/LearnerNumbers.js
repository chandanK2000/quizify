import React from 'react';
import './LearnerNumber.css';

const LearnerNumbers = () => {
  return (
    <div className="learner-numbers">
      <h1>Infocampus Learners in Numbers</h1>
      <h2>Our learner community's unwavering trust and confidence continue to propel our success story forward.</h2>
      <div className="number-blocks">
        <div className="number-block">
          <h3>3M+</h3>
          <p>Learners On YouTube</p>
        </div>
        <div className="number-block">
          <h3>150K+</h3>
          <p>Aspirants Trained</p>
        </div>
        <div className="number-block">
          <h3>20+</h3>
          <p>Training Domains</p>
        </div>
        <div className="number-block">
          <h3>4.8/5</h3>
          <p>Average Learner Satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default LearnerNumbers;
