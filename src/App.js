import React from 'react';
import './App.css';
import LogoNavigation from './LogoNavigation/LogoNavigation';
import Header from './Header/Header';
import Accordion from './Accordion/Accordion';
import TextBox from './TextBox/TextBox';
import TextBoxAbout from './TextBoxAbout/TextBoxAbout';
import TextBoxService from './TextBoxService/TextBoxService';
import Footer from './TextBoxService/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="page-container">
      <Router>
          <Switch>
            <Route exact path="/">
              <LogoNavigation />
            </Route>
            <Route path="/projects">
              <Header />
              <Accordion />
              <Footer />
            </Route>
            <Route path="/service">
              <Header />
              <TextBoxService />
              <Footer />
            </Route>
            <Route path="/aboutme">
              <Header />
              <TextBoxAbout />
              <Footer />
            </Route>
            <Route path="/contact">
              <Header />
              <TextBox />
              <Footer />
            </Route>
          </Switch>                                      
      </Router>
    </div>
  );
}

export default App;
