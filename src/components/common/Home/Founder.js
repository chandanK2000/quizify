import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <section className="founder-container">
      <div className="founder-left">
        <img src="./siyaramsir.jpg" alt="Founder" className="founder-image" />
      </div>
      <div className="founder-right">
        <h1 className="founder-heading">" Infocampus: Bharat ka Career Launchpad "</h1>
        <p className="founder-paragraph">
          Our Mission is clear. We are building to train over 10 Crores Career Aspirants living in under-resourced demographics of Bharat. We are tirelessly working to empower Career Seekers with Professional & Practical Tech/Non-tech Skills to help you compete for your dream career opportunities on Global Podium. Ab Bharat ka har graduate seekhega Top Professional Skills easy to understand Language mein! Kahin bhi, Kabhi bhi!
        </p>
        <p className="founder-name">- Kushagra Bhatia, Founder, WsCube Tech -</p>
      </div>
    </section>
  );
};

export default Founder;
