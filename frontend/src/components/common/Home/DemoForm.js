import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaBook, FaCommentDots, FaTimesCircle } from 'react-icons/fa';
import './DemoForm.css';

const DemoForm = ({ handleClose }) => {
  return (
    <div className="demo-modal">
      <div className="demo-modal-content">
        <span className="demo-close" onClick={handleClose}><FaTimesCircle /></span>
        <h2>Book Demo Class</h2>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="name" className='my-2'><FaUser /> Name:</label>
                <input type="text" id="name" name="name" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="email" className='my-2'><FaEnvelope /> Email:</label>
                <input type="email" id="email" name="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="mobile" className='my-2'><FaPhone /> Mobile:</label>
                <input type="tel" id="mobile" name="mobile" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="skillCenter" className='my-2'><FaBuilding /> Skill Center:</label>
                <select id="skillCenter" name="skillCenter" className="form-control">
                  <option value="jodhpur">Jodhpur</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="course" className='my-2'><FaBook /> Choose Course:</label>
                <select id="course" name="course" className="form-control">
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
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="courseType" className='my-2'><FaBook /> Course Type:</label>
                <select id="courseType" name="courseType" className="form-control">
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="message" className='my-2'><FaCommentDots /> Message:</label>
                <textarea id="message" name="message" className="form-control" rows="4"></textarea>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-lg-12 text-center ">
              <button type="submit" className="btn btn-primary p-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DemoForm;
