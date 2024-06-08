import React, { useRef } from 'react';
import './OurLearners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OurLearners = () => {
  const companyList = [
    { profile: './cognizant.svg' },
    { profile: './capgemini.svg' },
    { profile: './zoho.svg' },
    { profile: './hcl.svg' },
    { profile: './infosys.svg' },
    { profile: './mmt.svg' },
    { profile: './tcs.svg' },
    { profile: './wipro.svg' },
    { profile: './techmahindra.svg' },
    { profile: './thrillophilia.svg' },
  ];

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6.2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.05,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <section className='our-learners-container'>
      <h2 className='our-learners-header'>Our Learners Work at Global Companies & Startups</h2>
      <Slider ref={sliderRef} {...settings}>
        {companyList.map((company, index) => (
          <div className='maincardSection' key={index}>
            <div className='cards'>
              <img src={company.profile} alt="Company logo" className='company-image' />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurLearners;
