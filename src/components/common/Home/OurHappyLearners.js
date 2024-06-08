import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurHappyLearners.css';

const feedbacks = [
  {
    image: "./girl.jfif",
    name: "Fatima Giri",
    video: "G7tnUcv5SJU"
  },
  {
    feedback: "At Infocampus Institute, aspiring developers immerse themselves in the dynamic world of MERN stack development, a robust combination of MongoDB, Express.js, React.js, and Node.js. applications.",
    image: "./feedbackboy1.jfif",
    name: "Rakesh Ray"
  },
  {
    image: "./feedbackboy.jfif",
    name: "Mohan yadav",
    video: "G7tnUcv5SJU"
  },
  {
    feedback: "At Infocampus Institute, aspiring developers immerse themselves in the dynamic world of MERN stack development, a robust combination of MongoDB, Express.js, React.js, and Node.js. applications.",
    image: "./chandan.jfif",
    name: "Chandan kumar"
  },
  {
    image: "./girl1.jfif",
    name: "Raushani Singh",
    video: "G7tnUcv5SJU"
  },
  {
    feedback: "At Infocampus Institute, aspiring developers immerse themselves in the dynamic world of MERN stack development, a robust combination of MongoDB, Express.js, React.js, and Node.js. applications.",
    image: "./feedbackboy4.jfif",
    name: "Rohit kumar"
  }
];

const OurHappyLearners = () => {
  const [videoUrl, setVideoUrl] = useState(null);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const constructVideoUrl = (videoId) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section className="our-happy-learners">
      <h2 className="happy-learners-heading">Hear from Our Happy Learners</h2>
      <p className="happy-learners-subheading">We are proud to have positively influenced the career foundations for thousands of learners across India and Asian countries.</p>
      <Slider {...settings}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-block">
            {feedback.video && (
              <div>
                <iframe
                  width="100%"
                  height="auto"
                  src={constructVideoUrl(feedback.video)}
                  title="YouTube video player"
                  frameBorder="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="candidate-info">
                  <img src={feedback.image} alt={feedback.name} className="candidate-image" />
                  <p className="candidate-name">{feedback.name}</p>
                </div>
              </div>
            )}
            {feedback.feedback && (
              <>
                <p className="feedback-text">{feedback.feedback}</p>
                <div className="candidate-info">
                  <img src={feedback.image} alt={feedback.name} className="candidate-image" />
                  <p className="candidate-name">{feedback.name}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </Slider>
      {videoUrl && (
        <div className="video-popup">
          <div className="video-overlay" onClick={() => setVideoUrl(null)}></div>
          <div className="video-content">
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurHappyLearners;
