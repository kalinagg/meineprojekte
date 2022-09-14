import React from 'react';
import './App.css';
import LogoNavigation from './LogoNavigation/LogoNavigation';
import Header from './Header/Header';
import Accordion from './Accordion/Accordion';
import TextBox from './TextBox/TextBox';
import TextBoxAbout from './TextBoxAbout/TextBoxAbout';
import TextBoxCV from './TextBoxCV/TextBoxCV';
import Footer from './Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="page-container" id="page-container">
      <Router basename="/meineprojekte">
          <Switch>
            <Route exact path="/">
              <LogoNavigation />
            </Route>
            <Route path="/projects">
              <Header />
              <Accordion />
              <Footer />
            </Route>
            <Route path="/cv">
              <Header />
              <TextBoxCV />
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
