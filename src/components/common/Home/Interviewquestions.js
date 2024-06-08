import React from 'react';
import "./Interviewsquestions.css";
import { FaArrowRight } from 'react-icons/fa';

const Interviewquestions = () => {
  const interviews = [
    {
      title: "Top 108 SEO Interview Questions and Answers",
      description: "Well-curated basic to advanced interview questions on SEO, categorized into freshers and experienced professionals. Also, find tips to fast-track a career in SEO.",
    },
    {
      title: "Top 50 JavaScript Interview Questions and Answers",
      description: "Comprehensive JavaScript interview questions and answers covering both basic and advanced concepts. Prepare to ace your next JavaScript interview.",
    },
    {
      title: "Top 30 ReactJS Interview Questions and Answers",
      description: "Prepare for ReactJS interviews with this curated list of top 30 interview questions and answers. Master ReactJS concepts and land your dream job.",
    }
  ];

  return (
    <div className="interview-container">
      <div className="interview-left">
        <div className="interview-heading">
          <h2>Nail Job Interviews with Core Questions</h2>
          <p>Explore the most comprehensive set of interview questions that are frequently asked by companies/employers:</p>
        </div>

        {/* Map through the interview data and render interview blocks */}
        {interviews.map((interview, index) => (
          <div key={index} className="interview-block">
            <h3>{interview.title}</h3>
            <p>{interview.description}</p>
            <button>Learn Now <FaArrowRight /></button>
          </div>
        ))}
      </div>

      <div className="interview-right">
        <img src="./interview.jfif" alt="Interview" />
      </div>
    </div>
  );
}

export default Interviewquestions;
