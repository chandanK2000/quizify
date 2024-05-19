import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      id="myBtn"
      title="Go to top"
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '10px',
        right: '20px',
        zIndex: 99,
        fontSize: '18px',
        border: 'none',
        outline: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        padding: '6px 10px',
        borderRadius: '50%'
      }}
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
