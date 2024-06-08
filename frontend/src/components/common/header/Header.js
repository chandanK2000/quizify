import React, { useState, useEffect, useRef } from 'react';
import { FaAdjust, FaLanguage, FaExpand, FaBell, FaSignInAlt, FaUserPlus, FaCog, FaSignOutAlt,  } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'; 
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { MdQuiz } from 'react-icons/md'; // Importing the quiz icon

import './Header.css';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { courses, onlineCourses, freeResources } from '../../../courseData';
import Loginform from '../../../Loginform';
import Registerform from "../../../Registerform"
import EditProfileForm from '../../../EditProfileForm';
const Header = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [profileData, setProfileData] = useState({}); // New state to hold profile data
  const [showEditProfileModal, setShowEditProfileModal] = useState(false); 
  const [userData, setUserData] = useState(null);

  // Function to toggle the Edit Profile modal
  const toggleEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };
  // Function to handle profile updates
  const handleProfileUpdate = (updatedProfileData) => {
    // Implement logic to update user's profile data
    setProfileData(updatedProfileData);
    // Close the modal
    setShowEditProfileModal(false);
  };
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
    const storedUserData = sessionStorage.getItem('userData');
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);


  // const handleLogout = () => {
  //   const confirmed = window.confirm('Are you sure you want to log out ?');

  //   if (confirmed) {
  //     sessionStorage.removeItem('userData');
  //     setUserData(null);
  //     window.location.reload();
  //   }
    
  // };

  const handleLogout = () => {
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            sessionStorage.removeItem('userData');
            setUserData(null);
            window.location.reload();
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });
  };


 
  const iconData = [
    { icon: <FaBell />, link: '#' },
    { icon: <FaAdjust />, link: '#' },
    {
      icon: <FaCog onClick={toggleEditProfileModal} />, 
      link: '#',
    },
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
          {/* <img src="./siyaramsir.jpg" alt="logo" height="100px" width="100px"/> */}
          <span><MdQuiz className='quizicons' /> Quizify</span>

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
                      {resource.subcategories.map((subcategory, subIndex) => (
                        <div className="row" key={subIndex}>
                          {subcategory.map((item, itemIndex) => (
                            <div className="col-md-4 p-0" key={itemIndex}>
                              <ul className="list-unstyled">
                              {item.link.startsWith('/') ? (
                                <li>
                                    <Link className="dropdown-item" to={item.link}>
                                      {item.name}
                                    </Link>
                                </li>
                               
                              ) : (
                                 <li>
                                      <Link className="dropdown-item" to={`/interview/${item.name.toLowerCase()}`}>
                                        {item.name}
                                      </Link>
                                </li>
                               
                              )}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <hr className="custom-hr" />
              </div>



            </li>
          
          </ul>
        </div>
      </div>
      {/* Register modal */}
      <Modal show={showRegisterModal} onHide={toggleRegisterModal}>
        <Modal.Header closeButton>
          <Modal.Title className='text-info'><FaUserPlus /> Register</Modal.Title>
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
          <Modal.Title className='text-warning'><FaSignInAlt/> Login</Modal.Title>
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

      {/* Edit Profile modal */}
      <Modal show={showEditProfileModal} onHide={toggleEditProfileModal} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FiEdit />  Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
           <EditProfileForm profileData={profileData} onUpdate={handleProfileUpdate} /> 
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;

