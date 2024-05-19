import React, { useState } from 'react';
import { FaAdjust, FaLanguage, FaExpand, FaUser,FaBell } from 'react-icons/fa';
import './Header.css';
const Header = () => {

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };
  return (
    <header className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <img src="./logo3.jfif" height="40px" width="30px" alt="logo"/> */}
          Quizpp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
       
          <ul className="navbar-nav rightIcons ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaBell /> 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaAdjust /> {/* Dark/Light Mode Toggle */}
              </a>
            </li>
            <li className="nav-item dropdown language-dropdown">
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleLanguageDropdown}
              >
                <FaLanguage /> {/* Language Change */}
              </button>
              <ul className={`dropdown-menu ${languageDropdownOpen ? 'show' : ''}`} onClick={() => setLanguageDropdownOpen(false)}>
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Hindi</a></li>
                <li><a className="dropdown-item" href="#">Urdu</a></li>
                <li><a className="dropdown-item" href="#">Bengali</a></li>
                <li><a className="dropdown-item" href="#">Tamil</a></li>
                <li><a className="dropdown-item" href="#">Telugu</a></li>
                <li><a className="dropdown-item" href="#">Gujarati</a></li>
                <li><a className="dropdown-item" href="#">Marathi</a></li>
                <li><a className="dropdown-item" href="#">Kannada</a></li>
                <li><a className="dropdown-item" href="#">Malayalam</a></li>
                <li><a className="dropdown-item" href="#">Punjabi</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaExpand onClick={toggleFullScreen} /> {/* Full Width */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FaUser /> {/* Profile */}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" id="offlineCoursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Offline Courses 
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="offlineCoursesDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>CMS & Web Technologies</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Full Stack Web  Course</a></li>
                      <li><a className="dropdown-item" href="#">Wordpress Course</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Programming </h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Python Course</a></li>
                      <li><a className="dropdown-item" href="#">Java Course</a></li>
                      <li><a className="dropdown-item" href="#">C Programming</a></li>
                      <li><a className="dropdown-item" href="#">C++ Programming</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Digital Marketing </h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">SEO Course 7</a></li>
                      <li><a className="dropdown-item" href="#">Digital Marketing </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Professional Training </h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Data Analayatic </a></li>
                      <li><a className="dropdown-item" href="#">Graphic Designing </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Cyber Security </h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Ethical Hacking </a></li>
                      <li><a className="dropdown-item" href="#">Penetration Testimg </a></li>
=                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>App Development </h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Android App  Course</a></li>
                      <li><a className="dropdown-item" href="#">Flutter App  Course</a></li>
                    </ul>
                  </div>
                </div>
                <hr className='custom-hr' />
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" id="onlineCoursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Online Courses
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="onlineCoursesDropdown">
                <div className="row">
                  <div className="col-md-4">
                    <h6>Web Development</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Full Stack Web </a></li>
                      <li><a className="dropdown-item" href="#">WordPress Course</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>App Development</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Android App Development </a></li>
                      <li><a className="dropdown-item" href="#">Flutter App Development </a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Digital Marketing</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">SEO Course</a></li>
                      <li><a className="dropdown-item" href="#">Digital Marketing Course</a></li>
                      <li><a className="dropdown-item" href="#">Full Online Ads Course</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Professional Training</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Data Science</a></li>
                      <li><a className="dropdown-item" href="#">Data Analayatics</a></li>
                      <li><a className="dropdown-item" href="#">Python Course</a></li>
                      <li><a className="dropdown-item" href="#">Graphic Designing course</a></li>
                    </ul>
                  </div>   
                  <div className="col-md-4">
                    <h6>Cyber Security</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Ethical Hacking </a></li>
                      <li><a className="dropdown-item" href="#">Penetration Testing</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <h6>Cyber Security</h6>
                    <ul className="list-unstyled">
                      <li><a className="dropdown-item" href="#">Ethical Hacking </a></li>
                      <li><a className="dropdown-item" href="#">Penetration Testing</a></li>
                    </ul>
                  </div>
                </div>
                <hr className='custom-hr'/>
              </div>
             
            </li>
            <li className="nav-item dropdown position-static">
              <a className="nav-link dropdown-toggle" href="#" id="freeResourcesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Free Resource
              </a>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="freeResourcesDropdown">
                <div className="row">
                  <div className="col-md-6">
                    <h6>Interview Questions</h6>
                    <div className='row'>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>  <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                    </div>
                 
                  </div>
                  <div className="col-md-6">
                    <h6>Free Quizzes</h6>
                    <div className='row'>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>  <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className='col-md-4'>
                        <ul className="list-unstyled">
                          <li><a className="dropdown-item" href="#">HTML</a></li>
                          <li><a className="dropdown-item" href="#">CSS</a></li>
                          <li><a className="dropdown-item" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='custom-hr'/>
              </div>

            </li>
           <li>
              <form className="form-inline m-2 my-lg-0 header">
                <input className="form-control mr-sm-2" type="search" placeholder="Search here ....🔍" aria-label="Search"/>
                 
              </form>
           </li>
          </ul>
         
        </div>
      </div>
    </header>
  );
};

export default Header;
