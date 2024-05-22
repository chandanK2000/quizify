import React from 'react';
import "./Buildcareer.css";
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon component

const BuildCareer = () => {
  return (
    <div className="build-career-container">
      <h2 className="build-career-header">Build Your Career, Your Way</h2>
      <p className="build-career-content">
        Choose from live online courses, classroom training, or self-paced online programs.
      </p>

      <div className="blocks-container">
        <div className="block">
          <img src="./careerimage1.webp" alt="career 1" className="block-image" />
          <h3 className="block-heading">Live online Courses</h3>
          <p className="block-content"> Master industry-relevant skills with our vernacular online courses. Choose your program, get certified, and open doors to lucrative career opportunities.</p>
          <button className="btn btn-primary"> GET STARTED   <FaArrowRight /></button>
        </div>
        <div className="block">
          <img src="./careerimage2.webp" alt="career 1" className="block-image" />
          <h3 className="block-heading">Offline Courses</h3>
          <p className="block-content"> Master industry-relevant skills with our vernacular online courses. Choose your program, get certified, and open doors to lucrative career opportunities.</p>
          <button className="btn btn-primary"> GET STARTED  <FaArrowRight /></button>
        </div>
        <div className="block">
          <img src="./careerimge3.webp" alt="career 1" className="block-image" />
          <h3 className="block-heading">Self-paced Courses</h3>
          <p className="block-content"> Master industry-relevant skills with our vernacular online courses. Choose your program, get certified, and open doors to lucrative career opportunities.</p>
          <button className="btn btn-primary"> GET STARTED <FaArrowRight /> </button>
        </div>
      </div>
    </div>
  );
}

export default BuildCareer;
