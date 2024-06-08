import React from 'react';
import { FaBriefcase, FaClipboardCheck, FaUserGraduate } from 'react-icons/fa';
import "./Placements.css";

const Placements = () => {
  return (
    <div className="placements-container">
      <div className="placements-header">
        <h2>Placement Assistance to Get Hired Faster</h2>
        <p>On course completion, we align your job interviews with reliable organizations and prepare you for the interview. Our aim is to help you jumpstart your career faster.</p>
      </div>
      <div className="placements-content">
        <div className="placement-item">
          <FaBriefcase className="placement-icon" />
          <div className="placement-text">
            <h3>Profile-Centric Resume Creation</h3>
            <p>Craft minimalist & appealing resumes</p>
          </div>
        </div>
        <div className="placement-item">
          <FaClipboardCheck className="placement-icon" />
          <div className="placement-text">
            <h3>Interview Preparation & Mentorship</h3>
            <p>Practice with mock interviews, before the actual interview</p>
          </div>
        </div>
        <div className="placement-item">
          <FaUserGraduate className="placement-icon" />
          <div className="placement-text">
            <h3>Internship Opportunities</h3>
            <p>Get more exposure & experience with internships</p>
          </div>
        </div>
      </div>
      <div className="start-learning">
        <h2>Start Learning Now</h2>
        <p>Take the first step towards your career goals</p>
        <button>Start Learning Now</button>
      </div>
    </div>
  );
};

export default Placements;
