import React, { useState, useEffect } from 'react';

const ScrollingLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const scrolled = window.scrollY;
      const position = scrolled / (fullHeight - windowHeight);
      setScrollProgress(position * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
    </div>
  );
};

export default ScrollingLine;
