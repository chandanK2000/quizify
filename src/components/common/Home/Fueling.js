import React from 'react';
import { FaRocket } from 'react-icons/fa';
import './Fueling.css';

const Fueling = ({ openDemoForm }) => {
  return (
    <div className="fueling-container">
      {/* Left Section */}
      <div className="left-section">
        <h6> Success-oriented learning! <FaRocket className="icon" /></h6>
        <h1>Fueling Skills, Igniting<br /> Careers</h1>
        <p>
          Master industry-relevant skills with our vernacular online courses. Choose your program, get certified, and open doors to lucrative career opportunities.
        </p>
        <div className="buttons">
          <button className="explores">Explore Courses</button>
          <button className="democlass" onClick={openDemoForm}>Book Demo Class</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <img src="./quiz.jpg" height="240Px" width="100%" alt="Learning" />
      </div>
    </div>
  );
};

export default Fueling;
