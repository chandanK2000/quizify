import React, { useState, useEffect, useRef } from 'react';
import { FaAdjust, FaLanguage, FaExpand, FaBell, FaSignInAlt, FaUserPlus, FaCog } from 'react-icons/fa';
import './Header.css';
import { Link } from 'react-router-dom';
import { courses, onlineCourses, freeResources } from '../../../courseData';
import LoginRegisterModal from '../../../LoginRegisterModal';

const Header = () => {
  const [showLoginRegisterModal, setShowLoginRegisterModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);

  const toggleModal = () => {
    setShowLoginRegisterModal(!showLoginRegisterModal);
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
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

  const iconData = [
    { icon: <FaBell />, link: '#' },
    { icon: <FaAdjust />, link: '#' },
    { icon: <FaCog />, link: '#' },
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
    <header className="navbar navbar-expand-lg  py-3">
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
            <li className="custom-btn">
              <button className="nav-link btn custom-btn" onClick={() => {
                toggleModal();
                toggleMode();
              }}>
                {isLoginMode ? <><FaUserPlus /> Register</> : <>< FaSignInAlt /> Login</>}
              </button>
            </li>
          </ul>
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown position-static">
              <Link
                className="nav-link dropdown-toggle"
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
                className="nav-link dropdown-toggle"
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
                className="nav-link dropdown-toggle"
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
                                  <a className="dropdown-item" href={item.link}>
                                    {item.name}
                                  </a>
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
      <LoginRegisterModal
        showModal={showLoginRegisterModal}
        handleToggleModal={toggleModal}
        isLoginMode={isLoginMode}
        toggleMode={toggleMode}
      />
    </header>
  );
};

export default Header;
