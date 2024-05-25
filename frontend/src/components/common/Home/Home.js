import React, { useState } from 'react';
import Fueling from './Fueling';
import OurLearners from './OurLearners';
import Buildcareer from './Buildcareer';
import OurOnlineCourses from './OurOnlinecourses';
import Founder from './Founder';
import OurHappyLearners from './OurHappyLearners';
import LearnerNumbers from './LearnerNumbers';
import InfocampusTrainingCenter from './InfocampusTrainingCenter';
import DemoForm from './DemoForm';
import Placements from './Placements';
import Infocourses from './Infocourses';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Fueling openDemoForm={openModal} />
      <OurLearners />
      <Buildcareer />
      <OurOnlineCourses />
      <LearnerNumbers />
      <Founder />
      <OurHappyLearners />
      <InfocampusTrainingCenter />
      <Placements />
      <Infocourses />
      {isModalOpen && <DemoForm handleClose={closeModal} />}
    </div>
  );
};

export default Home;
