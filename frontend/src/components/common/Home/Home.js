import React from 'react'
import Fueling from './Fueling';
import OurLearners from './OurLearners';
import Buildcareer from './Buildcareer';
import OurOnlineCourses from './OurOnlinecourses';
import Founder from './Founder';
import OurHappyLearners from './OurHappyLearners';
import LearnerNumbers from './LearnerNumbers';
import InfocampusTrainingCenter from './InfocampusTrainingCenter';

const Home = () => {
  return (
   <div>
    <Fueling/>
    <OurLearners/>
      <Buildcareer/>
      <OurOnlineCourses/>
      <LearnerNumbers/>
      <Founder />
      <OurHappyLearners />
      <InfocampusTrainingCenter/>
  
   </div>
  )
}

export default Home;