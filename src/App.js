import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import HomePage from './components/Home/HomePage.js';
import Skills from './components/Skills/Skills.js';
import About from './components/About/ABout.js';
import Main from './components/MainPage/main.js';
import './App.css';

function App() {
  return (

    <>
    <div className='app'>


      <BrowserRouter>
      <Header /> 

    {/* You probably want your header outside the Routes so it's always visible */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
