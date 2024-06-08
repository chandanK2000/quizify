import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Infocourses.css';

const Infocourses = () => {
  // Define array of course categories
  const courseCategories = [
    {
      title: "Popular online courses",
      courses: [
        "Full Stack Development Course",
        "Digital Marketing Course",
        "SEO Course",
        "Ethical Hacking Course",
        "Data Analytics Course",
        "Data Science Course",
        "Python Course",
        "Flutter Course",
        "Penetration Testing Course",
        "WordPress Course",
        "Graphic Designing Course",
        "Content Writing Course"
      ]
    },
    {
      title: "Useful links",
      links: [
        "About Us",
        "Online Courses",
        "Blog",
        "Sitemap",
        "Self-Paced Courses",
        "Reviews",
        "Contact Us",
        "Verify Certificate",
        "Summer Training",
        "Events",
        "Our Centers",
        "Work With Us",
        "Other Links"
      ]
    },
    {
      title: "Our Centers",
      centers: [
        "Bangalore",
        "Mumbai",
        "Delhi",
        "Chennai",
        "Hyderabad",
        "Pune",
        "Kolkata",
        "Ahmedabad",
        "Jaipur",
        "Surat",
        "Lucknow",
        "Kanpur",
        "Nagpur"
      ]
    }
  ];

  return (
    <div className="infocourses-container">
      <div className="infocourse-block text-center">
        <img src="./infocampus.png" alt="Infocampus logo" className="rounded-circle border bg-warning" />
        <div className="infocourse-text">
          <h3>Infocampus</h3>
          <p>
            Infocampus is the Vernacular Upskilling Edtech platform. By offering expert mentorship with our tech-powered
            courses in the first language of Indians, we equip learners with the skills to thrive in the global
            workforce.
          </p>
          <h3>Stay up to date</h3>
          <p>Subscribe to our newsletter to receive the latest updates and offers.</p>
          <form className="subscribe-form">
            <div className="input-with-icon">
              <input type="email" placeholder="Enter your email" className="form-control" />
              <button type="submit" className="icon-button">
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map over course categories */}
      {courseCategories.map((category, index) => (
        <div key={index} className="infocourse-block">
          <h3>{category.title}</h3>
          {/* Check if the category has courses */}
          {category.courses && (
            <ul>
              {category.courses.map((course, i) => (
                <li key={i}><a href="#">{course}</a></li>
              ))}
            </ul>
          )}
          {/* Check if the category has links */}
          {category.links && (
            <ul>
              {category.links.map((link, i) => (
                <li key={i}><a href="#">{link}</a></li>
              ))}
            </ul>
          )}
          {/* Check if the category has centers */}
          {category.centers && (
            <ul>
              {category.centers.map((center, i) => (
                <li key={i}><a href="#">{center}</a></li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Infocourses;
