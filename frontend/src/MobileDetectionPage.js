import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MobileDetectionPage = () => {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      toast.error('This application is not supported on mobile devices. Please use a desktop or laptop device.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }, []);

  return (
    <></>
  );
};

export default MobileDetectionPage;
