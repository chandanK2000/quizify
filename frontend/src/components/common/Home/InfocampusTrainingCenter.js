import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import './InfocampusTrainingCenter.css'
const InfocampusTrainingCenter = () => {
  return (
    <div className="infocampus-training-center">
      <div className="youtube-section">
        <img src='./youtube3.png' alt="YouTube Icon"  className="youtube-icon" />
      </div>
      <div className="subscriber-section">
        <h1>Infocampus Training Center</h1>
        <h2>3 Million Subscribers </h2>
        <p> On Youtube</p>
        <a href="https://www.youtube.com/@ui-master" target="_blank" rel="noopener noreferrer">
          <button className="youtube-button">
            <FaYoutube className="youtube-button-icon" />
            Watch on YouTube
          </button>
        </a>
      </div>
    </div>
  );
}

export default InfocampusTrainingCenter;
