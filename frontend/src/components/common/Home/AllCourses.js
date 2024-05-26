import React from 'react';
import "./AllCourses.css";

const AllCourses = () => {
  // Define array of course categories
  const courseCategories = [
    {
      title: "Digital Marketing Courses",
      courses: [
        "Digital Marketing Course",
        "SEO Course",
        "Social Media Marketing Course",
        "Content Writing Course",
        "YouTube Course",
        "Instagram Marketing Course",
        "Google Ads Course",
        "Copywriting Course",
        "Full Online Ads Course"
      ]
    },
    {
      title: "Web Development Courses",
      courses: [
        "Full Stack Developer Course",
        "WordPress Course",
        "MERN Stack Course",
        "Laravel Course",
        "Web Development Course",
        "HTML Course",
        "ReactJS Course",
        "Javascript Course",
        "PHP Course",
        "NodeJS Course",
        "Front-End Development Course",
        "Web Designing Course",
        "CSS Course"
      ]
    },
    {
      title: "More Professional Courses",
      courses: [
        "Cyber Security Course",
        "Tableau Course",
        "Android App Development",
        "Mobile App Development",
        "Power BI Course"
      ]
    },
    {
      title: "Free Courses",
      courses: [
        "Semrush Course",
        "Google Tag Manager Course",
        "Blogging Course",
        "Photoshop Course",
        "Video Editing Course",
        "AngularJS Course",
        "Shopify Course",
        "Django Course",
        "Email Marketing Course",
        "Affiliate Marketing Course"
      ]
    },
    {
      title: "Interview Questions",
      courses: [
        "HTML Interview Questions",
        "CSS Interview Questions",
        "PHP Interview Questions",
        "JavaScript Interview Questions",
        "Flutter Interview Questions",
        "Data Structure Interview",
        "Java Interview Questions",
        "MySQL Interview Questions",
        "Python Interview Questions",
        "DBMS Interview Questions",
        "Power BI Interview Questions",
        "Angular Interview Questions",
        "ReactJS Interview Questions",
        "C Interview Questions",
        "Django Interview Questions",
        "Email Marketing Interview",
        "Content Writing Interview",
        "NodeJS Interview Questions",
        "SEO Interview Questions",
        "OOPS Interview Questions",
        "SQL Interview Questions",
        "Digital Marketing Interview Q"
      ]
    },
    {
      title: "Popular Career Resources",
      courses: [
        "Professional Courses After 12th",
        "Courses After Graduation",
        "How to Become SEO Freelancer?",
        "High-Income Skills",
        "Digital Marketing Books",
        "Become Google Ads Expert",
        "Build a Career in Digital",
        "SEO Career Path",
        "Make Money Online",
        "Become Data Analyst",
        "Become Flutter Developer",
        "Best Programming Languages",
        "Become Ethical Hacker",
        "Python Developer Salary",
        "Full Stack Developer Salary",
        "Data Analyst Salary",
        "Free Digital Marketing Projects"
      ]
    }
  ];

  return (
    <div className="all-courses">
      {courseCategories.map((category, index) => (
        <React.Fragment key={index}>
          <h2>{category.title}</h2>
          <ul>
            {category.courses.map((course, i) => (
              <li key={i}><a href="#">{course}</a></li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllCourses;
