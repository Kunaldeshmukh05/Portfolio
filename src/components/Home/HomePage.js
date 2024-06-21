import React from 'react';
import Main from '../MainPage/main.js';
import Skills from '../Skills/Skills.js';
import './HomePage.css';
import About from '../About/ABout.js';
import Project from '../Projects/Project.js'
import Footer from '../Footer/Footer.js';
const HomePage = () => {
  return (
    <div className='Home'>
      <Main />
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
      
    </div>
  );
}

export default HomePage;
