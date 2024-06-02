import { useEffect, useRef } from 'react';

const useInactivityTimer = (onLogout, timeoutDuration = 600000) => {
  const timeoutID = useRef(null);

  useEffect(() => {
    const resetTimer = () => {
      if (timeoutID.current) {
        clearTimeout(timeoutID.current);
      }
      timeoutID.current = setTimeout(onLogout, timeoutDuration);
    };

    const eventHandler = () => resetTimer();

    window.addEventListener('mousemove', eventHandler);
    window.addEventListener('mousedown', eventHandler);
    window.addEventListener('keypress', eventHandler);
    window.addEventListener('touchmove', eventHandler);
    window.addEventListener('scroll', eventHandler);

    resetTimer();

    return () => {
      clearTimeout(timeoutID.current);
      window.removeEventListener('mousemove', eventHandler);
      window.removeEventListener('mousedown', eventHandler);
      window.removeEventListener('keypress', eventHandler);
      window.removeEventListener('touchmove', eventHandler);
      window.removeEventListener('scroll', eventHandler);
    };
  }, [onLogout, timeoutDuration]);
};

export default useInactivityTimer;
