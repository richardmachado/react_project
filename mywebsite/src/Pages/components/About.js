import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="personal-info">
            <h3>Personal Information</h3>
            <ul>
              <li><FontAwesomeIcon icon={faUser} /> Name: Richard Machado</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> Email: richard.machado@asu.edu</li>
              <li><FontAwesomeIcon icon={faPhone} /> Phone: Email me</li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} /> Location: San Diego, CA, USA</li>
              <li><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="your-linkedin-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></li>
              <li><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/richardmachado" target="_blank" rel="noopener noreferrer">https://github.com/richardmachado</a></li>
            </ul>
          </div>
          <div className="bio">
            <h3>My Story</h3>
            <p>Write a brief and engaging paragraph about yourself. Highlight your key skills, experiences, and what drives you. You can talk about your background, your passions, and your career aspirations.</p>
            <p>Add another paragraph here to elaborate further on your interests and what you're currently working on. You can mention specific projects or areas you're focusing on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;