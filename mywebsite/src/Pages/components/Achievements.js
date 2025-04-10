import React from 'react';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal, faCertificate, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <FontAwesomeIcon icon={faTrophy} />
            <h3>Award/Recognition 1</h3>
            <p>Brief description of the award and its significance.</p>
          </div>
          <div className="achievement-item">
            <FontAwesomeIcon icon={faMedal} />
            <h3>Project Highlight 1</h3>
            <p>Brief description of a significant project and your role.</p>
          </div>
          <div className="achievement-item">
            <FontAwesomeIcon icon={faCertificate} />
            <h3>Certification/Skill 1</h3>
            <p>Mention a relevant certification or a key skill you've mastered.</p>
          </div>
          <div className="achievement-item">
            <FontAwesomeIcon icon={faLightbulb} />
            <h3>Innovation/Contribution</h3>
            <p>Describe a notable contribution or innovative idea you've had.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;