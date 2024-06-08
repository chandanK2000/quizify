import React from 'react';
import './DemoForm.css'
const DemoForm = ({ handleClose }) => {
 
  return (
    <div className="demo-modal">
      <div className="demo-modal-content">
        <span className="democlose" onClick={handleClose}>X</span>
        <h2>Book Demo Class</h2>
        <div className='row'>
          <div className='col-lg-6'>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className='form-control' name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="tel" id="mobile" name="mobile" className='form-control' />
            </div>
          </div>
          <div className='col-lg-6'>

            <div className="form-group">
              <label htmlFor="skillCenter">Skill Center:</label>
              <select id="skillCenter" className='form-select' name="skillCenter" >
                <option value="jodhpur">Jodhpur</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="course">Choose Course:</label>
              <select id="course" name="course" className='form-select' >
                <option value="fullstack">Full Stack MERN</option>
                <option value="javadeveloper">Java Developer</option>
                <option value="datascience">Data Science</option>
                <option value="machinelearning">Machine Learning</option>
                <option value="webdevelopment">Web Development</option>
                <option value="appdevelopment">App Development</option>
                <option value="cloudcomputing">Cloud Computing</option>
                <option value="cybersecurity">Cyber Security</option>
                <option value="digitalmarketing">Digital Marketing</option>
                <option value="blockchain">Blockchain</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="courseType">Course Type:</label>
              <select id="courseType" name="courseType" className='form-select'>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" className='form-control' ></textarea>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
