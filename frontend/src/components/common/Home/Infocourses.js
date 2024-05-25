import React from 'react';
import "./Infocourses.css";

const Infocourses = () => {
  return (
    <div className="infocourses-container">
      <div className="infocourse-block">
          <img src="./infocampus.png" alt="Infocampus logo" className='rounded-circle border bg-warning text-center' />
        <div className="infocourse-text">
          <h3>Infocampus</h3>
          <p>Infocampusis the Vernacular Upskilling Edtech platform. By offering expert mentorship with our tech-powered courses in the first language of Indians, we equip learners with the skills to thrive in the global workforce.</p>
          <h3>Stay up to date</h3>
          <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
     
      <div className="infocourse-block">
        <h3>Popular online courses</h3>
        <ul>
          <li>Full Stack Development Course</li>
          <li>Digital Marketing Course</li>
          <li>SEO Course</li>
          <li>Ethical Hacking Course</li>
          <li>Data Analytics Course</li>
          <li>Data Science Course</li>
          <li>Python Course</li>
          <li>Flutter Course</li>
          <li>Penetration Testing Course</li>
          <li>WordPress Course</li>
          <li>Graphic Designing Course</li>
          <li>Content Writing Course</li>
        </ul>
      </div>
      <div className="infocourse-block">
        <h3>Useful links</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Online Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Self-Paced Courses</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Verify Certificate</a></li>
          <li><a href="#">Summer Training</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Our Centers</a></li>
          <li><a href="#">Work With Us</a></li>
          <li><a href="#">Other Links</a></li>
        </ul>
      </div>
      <div className="infocourse-block">
        <h3>Our Centers</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Online Courses</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Self-Paced Courses</a></li>
          <li><a href="#">Reviews</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Verify Certificate</a></li>
          <li><a href="#">Summer Training</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Our Centers</a></li>
          <li><a href="#">Work With Us</a></li>
          <li><a href="#">Other Links</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Infocourses;
