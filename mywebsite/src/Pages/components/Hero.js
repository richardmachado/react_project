import React from 'react';
import './Hero.css';
// import ProfileImage from '../assets/placeholder-profile.jpg'; // Import your image

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm Richard</h1>
          <p className="tagline">Passionate Coder | Aspiring Software Engineer</p>
          <a href="#about" className="button">Learn More</a>
        </div>
        {/* <div className="hero-image">
          <img src={ProfileImage} alt="Your Profile" />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;