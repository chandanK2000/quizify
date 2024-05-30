import React, { useState, useEffect, useRef } from 'react';
import { FaAdjust, FaLanguage, FaExpand, FaBell, FaSignInAlt, FaUserPlus, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { courses, onlineCourses, freeResources } from '../../../courseData';
import Loginform from '../../../Loginform';
import Registerform from "../../../Registerform"
const Header = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const [userData, setUserData] = useState(null);


  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    setShowRegisterModal(false);
   
  };


  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
    setShowLoginModal(false);
  };

  const handleSuccessfulRegistration = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

 

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
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageSelect = () => {
    setShowLanguageDropdown(false);
  };

  const languageOptions = ['English', 'Spanish', 'French', 'German'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Get user data from localStorage
    const storedUserData = localStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);


  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out ?');

    if (confirmed) {
      localStorage.removeItem('userData');
      setUserData(null);
      window.location.reload();
    }
    
  };

 
  const iconData = [
    { icon: <FaBell />, link: '#' },
    { icon: <FaAdjust />, link: '#' },
    {
      icon: <FaCog />,
      link: '#' },
    {
      icon: <FaLanguage onClick={toggleLanguageDropdown} />,
      link: '#',
      dropdown: (
        showLanguageDropdown && (
          <ul className="dropdown-menu show language-dropdown" ref={languageDropdownRef}>
            {languageOptions.map((language, index) => (
              <li key={index} className="dropdown-item" onClick={handleLanguageSelect}>
                {language}
              </li>
            ))}
          </ul>
        )
      )
    },
    { icon: <FaExpand onClick={toggleFullScreen} />, link: '#' }
  ];

  return (
    <header className="navbar navbar-expand-lg py-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Quizpp
        </Link>
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
            {iconData.map((item, index) => (
              <li className="nav-item" key={index} style={{ position: 'relative' }}>
                <a className="nav-link" href={item.link}>
                  {item.icon}
                </a>
                {item.dropdown}
              </li>
            ))}
            <li><button className='btn btn-primary mx-2' onClick={toggleRegisterModal}>Register</button></li>
            <li>
              {userData ? (
                <>
                  <button className='btn btn-primary' onClick={handleLogout}><FaSignOutAlt/> <span>{userData.name}</span></button>
                
                </>
              ) : (
                <button className='btn btn-primary' onClick={toggleLoginModal}>Login</button>
              )}
            </li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle courseHeading"
                to="#"
                id="offlineCoursesDropdown"
                role="button"
                aria-expanded="false"
              >
                Offline Courses
              </Link>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="offlineCoursesDropdown">
                <div className="row">
                  {courses.map((category, index) => (
                    <div className="col-md-4" key={index}>
                      <h6>{category.category}</h6>
                      <ul className="list-unstyled">
                        {category.courses.map((course, idx) => (
                          course.link.startsWith('/') ? (
                            <li key={idx}>
                              <Link className="dropdown-item" to={course.link}>
                                {course.name}
                              </Link>
                            </li>
                          ) : (
                            <li key={idx}>
                              <a className="dropdown-item" href={course.link}>
                                {course.name}
                              </a>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <hr className="custom-hr" />
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle courseHeading"
                to="#"
                id="onlineCoursesDropdown"
                role="button"
                aria-expanded="false"
              >
                Online Courses
              </Link>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="onlineCoursesDropdown">
                <div className="row">
                  {onlineCourses.map((category, index) => (
                    <div className="col-md-4" key={index}>
                      <h6>{category.category}</h6>
                      <ul className="list-unstyled">
                        {category.courses.map((course, idx) => (
                          course.link.startsWith('/') ? (
                            <li key={idx}>
                              <Link className="dropdown-item" to={course.link}>
                                {course.name}
                              </Link>
                            </li>
                          ) : (
                            <li key={idx}>
                              <a className="dropdown-item" href={course.link}>
                                {course.name}
                              </a>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <hr className="custom-hr" />
              </div>
            </li>
            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle courseHeading"
                to="#"
                id="freeResourcesDropdown"
                role="button"
                aria-expanded="false"
              >
                Free Resources
              </Link>
              <div className="dropdown-menu mega-menu p-4" aria-labelledby="freeResourcesDropdown">
                <div className="row">
                  {freeResources.map((resource, index) => (
                    <div className="col-md-6" key={index}>
                      <h6>{resource.category}</h6>
                      <div className="row">
                        {resource.subcategories.map((subcategory, subIndex) => (
                          <div className="col-md-4" key={subIndex}>
                            <ul className="list-unstyled">
                              {subcategory.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link className="dropdown-item" to={`/quiz/${item.subject}`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="custom-hr" />
              </div>
            </li>
            <li>
              <form className="form-inline m-2 my-lg-0 header">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search here ....🔍"
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
      {/* Register modal */}
      <Modal show={showRegisterModal} onHide={toggleRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title><FaUserPlus /> Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Registerform onSuccessfulRegistration={handleSuccessfulRegistration} />
          <div className="mt-2 text-center">
            <span>Already have an account? </span>
            <button className="btn btn-link p-0" onClick={toggleLoginModal}>
              Login
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Login modal */}
      <Modal show={showLoginModal} onHide={toggleLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title><FaSignInAlt /> Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Loginform />
          <div className="mt-2 text-center">
            <span>Don't have an account? </span>
            <button className="btn btn-link p-0" onClick={toggleRegisterModal}>
              Register
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;

