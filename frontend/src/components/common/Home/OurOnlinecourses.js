import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./OurOnlinecourses.css";

const OurOnlineCourses = () => {
  const coursesList = [
    {
      image: './fullstack.png',
      heading: 'Web Development',
      name: 'Full Stack Development course',
      timing: '12 Weeks',
      trainedStudents: '2000+'
    },
    {
      image: './digitaltraining.webp',
      heading: 'Data Science',
      name: 'Python & R',
      timing: '10 Weeks',
      trainedStudents: '1500+'
    },
    {
      image: './penetration.webp',
      heading: 'cyber security',
      name: 'Penetration Testing course',
      timing: '5 Month Training',
      trainedStudents: '1800+'
    },
    {
      image: './python.webp',
      heading: 'Programming',
      name: 'Adobe XD & Figma',
      timing: '6 Weeks',
      trainedStudents: '1200+'
    },
    {
      image: './datascience.webp',
      heading: 'Professional',
      name: 'Data Science Course',
      timing: '6 Weeks',
      trainedStudents: '1200+'
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <section className='our-courses-container'>
      <h2 className='our-courses-header'>Explore Our Live Online Courses</h2>
      <div className='button-container'>
        <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>&lt;</button>
        <button className="next-button" onClick={() => sliderRef.current.slickNext()}>&gt;</button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {coursesList.map((course, index) => (
          <div className='course-card' key={index}>
            <img src={course.image} alt="Course image" className='course-image' />
            <div className='course-info'>
              <h3 className='course-heading'>{course.heading}</h3>
              <p className='course-name'>{course.name}</p>
             <ul>
              <li>
                  {course.timing}
              </li>
               <li>
                  students trained  {course.trainedStudents}
              </li>
                
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurOnlineCourses;
