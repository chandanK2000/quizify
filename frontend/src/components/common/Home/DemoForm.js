// DemoForm.js
import React from 'react';

const DemoForm = ({ handleClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Book Demo Class</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input type="tel" id="mobile" name="mobile" />
          </div>
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DemoForm;
