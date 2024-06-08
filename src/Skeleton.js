import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton">
        <div className="skeleton-circle small"></div>
        <div className="skeleton-triangle large"></div>
        <div className="skeleton-square medium"></div>
        <div className="skeleton-circle large"></div>
        <div className="skeleton-triangle small"></div>
        <div className="skeleton-square large"></div>
        
      </div>
    </div>
  );
};

export default Skeleton;
