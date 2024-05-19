import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'left',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <p>This is the Footer</p>
      </div>
      <div>
        <a href="https://www.facebook.com"><FaFacebook style={{ marginRight: '10px' }} /></a>
        <a href="https://www.twitter.com"><FaTwitter style={{ marginRight: '10px' }} /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
    </footer>
  );
};

export default Footer;
