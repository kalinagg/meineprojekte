import React from 'react';
import './App.css';
import LogoNavigation from './LogoNavigation/LogoNavigation';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Accordion from './Accordion/Accordion';
import TextBox from './TextBox/TextBox';
import TextBoxAbout from './TextBoxAbout/TextBoxAbout';
import TextBoxService from './TextBoxService/TextBoxService';
import Footer from './TextBoxService/Footer/Footer';

function App() {
  return (
    <div className="page-container">
      <LogoNavigation />
      <div className='head'>
        <Logo />
        <Navigation />
        <Accordion />
        <TextBox />
        <TextBoxAbout />
        <TextBoxService />
        <Footer />
      </div>
    </div>
  );
}

export default App;
