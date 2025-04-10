import React from 'react';


import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '../App.css'; // Import global styles

const Home = () => (
    <div>
    <Header />
    <Hero />
    <About />
    <Achievements />
    <Contact />
    <Footer />
  </div>
);

export default Home;