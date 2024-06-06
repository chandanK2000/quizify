import React from 'react';
//import './Modal.css'; // Add your modal styles here

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <h2>Welcome to Our Demo Class</h2>
        <p>This is a demo class modal. You can add your content here.</p>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
