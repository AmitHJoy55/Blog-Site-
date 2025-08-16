
import React, { useContext } from 'react';

import { Context } from '../../main'; 

function HeroSection() {
  const { mode } = useContext(Context);

  return (
    <div className={`hero ${mode === 'light' ? 'light-hero' : 'dark-hero'}`}>
      <div className="hero-content">
        <img
          src="/SWE (1).jpg"
          alt="Box Office"
          className="hero-image"
        />
        <div>
          <h1 className="hero-heading">Connect, Collaborate, Conquer!</h1>
          <p className="hero-paragraph">
          Discover the power of community with SWEConnect. Network with peers, share your successes,
           and find the resources you need to excel in software engineering.
          </p>
          {/* <button className="hero-button">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

