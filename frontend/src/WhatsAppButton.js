import React from 'react';
import './WhatsAppButton.css'; 
import {FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a href="https://api.whatsapp.com/send?phone=8792462607" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className='whatsappicons' />
      </a>
     
    </div>
  );
};

export default WhatsAppButton;
