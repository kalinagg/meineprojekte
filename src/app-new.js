import React, { Component } from 'react';
import LogoNavigation from './logo-navigation/logo-navigation';
import Header from './header-new/header';
import Contact from './contact/contact';
import About from './about/about';
import Cv from './cv/cv';
import Footer from './footer-new/footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import TextBoxProjects from './projects/projects';
import Language from './language/language';

export default class App extends Component {
    constructor(props) {
        super(props);

        const currentLanaguage = window.location.pathname.slice(1,3);
    
        this.state = {
            language: currentLanaguage ? currentLanaguage : 'de',
        };
    };

    setLanguage = e => {
        this.setState({
            language: e.target.dataset.lang
          });
    };

    render() {
        const {language} = this.state;

        return (
            <div className="page-container" id="page-container">
                <Router basename="/">
                    <Switch>                        
                        <Route exact path={`/${language}`}>
                            <Language setLanguage={this.setLanguage} page='' />
                            <LogoNavigation language={language} />
                        </Route>
                        <Route exact path='/'>
                            <Redirect to={`/${language}`} />
                        </Route>
                        <Route path={`/${language}/projects`}>
                            <Header setLanguage={this.setLanguage} language={language} page='projects' />
                            <TextBoxProjects language={language} />
                            <Footer language={language} />
                        </Route>
                        <Route path={`/${language}/cv`}>
                        <Header setLanguage={this.setLanguage} language={language} page='cv' />
                            <Cv language={language} />
                            <Footer language={language} />
                        </Route>f
                        <Route path={`/${language}/aboutme`}>
                            <Header setLanguage={this.setLanguage} language={language} page='aboutme' />
                            <About language={language} />
                            <Footer language={language} />
                        </Route>
                        <Route path={`/${language}/contact`}>
                            <Header setLanguage={this.setLanguage} language={language} page='contact' />
                            <Contact language={language} />
                            <Footer language={language} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}