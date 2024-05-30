import React from 'react';
import { Link } from 'react-router-dom';

const QuizSetList = ({ sets }) => {
  return (
    <div>
      <h2>Select a Quiz Set</h2>
      <ul>
        {sets.map((set, index) => (
          <li key={index}>
            <Link to={set.link}>{set.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSetList;
