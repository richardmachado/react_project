import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">Richard Machado</div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;