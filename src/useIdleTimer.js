import { useState, useEffect, useRef } from 'react';

const useIdleTimer = (timeout, onIdle) => {
  const [isIdle, setIsIdle] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsIdle(false);
    timerRef.current = setTimeout(() => {
      setIsIdle(true);
      onIdle();
    }, timeout);
  };

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'wheel', 'scroll', 'touchstart'];

    const handleEvent = () => resetTimer();

    events.forEach((event) => window.addEventListener(event, handleEvent));

    resetTimer();

    return () => {
      events.forEach((event) => window.removeEventListener(event, handleEvent));
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [timeout, onIdle]);

  return isIdle;
};

export default useIdleTimer;
