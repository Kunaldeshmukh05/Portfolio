import React from 'react';
import Main from '../MainPage/main.js';
import Skills from '../Skills/Skills.js';
import './HomePage.css';
import About from '../About/ABout.js';

const HomePage = () => {
  return (
    <div className='Home'>
      <Main />
      <About></About>
      <Skills></Skills>
      
    </div>
  );
}

export default HomePage;
