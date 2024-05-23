import React from 'react'
import Fueling from './Fueling';
import OurLearners from './OurLearners';
import Buildcareer from './Buildcareer';
import OurOnlineCourses from './OurOnlinecourses';
import Founder from './Founder';
import OurHappyLearners from './OurHappyLearners';

const Home = () => {
  return (
   <div>
    <Fueling/>
    <OurLearners/>
      <Buildcareer/>
      <OurOnlineCourses/>
      <Founder />
      <OurHappyLearners />
   </div>
  )
}

export default Home;