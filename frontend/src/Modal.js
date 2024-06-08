import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Modal } from 'bootstrap'; 

const CustomModal = () => {
  const modalRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (modalRef.current) {
        const modal = new Modal(modalRef.current);
        modal.show(); // Show the modal
      }
    }, 40000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div ref={modalRef} className="modal fade" size="lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary fs-3" id="exampleModalLabel">Welcome to Our Demo Class</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* <div className="row">
              <div className='col-lg-12 text-center demomodalbody'>
                <img className='images' src="./siyaramsir.jpg" alt="demoteacher"/>
              </div>
            </div> */}
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
      </div>
    </div>
  );
};

export default CustomModal;
