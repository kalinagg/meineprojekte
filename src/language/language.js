import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import deFlag from './images/de-flag.svg';
import enFlag from './images/en-flag.svg';
import bgFlag from './images/bg-flag.svg';
import './language.css';


export default class Language extends Component {
    render() {
        const {setLanguage, page} = this.props;

        return (					 
            <div className="language-container">
                <NavLink to={`/de/${page}`} onClick={setLanguage} activeClassName="active">
                    <img src={deFlag} alt="Deutsch" title="Deutsch" data-lang="de" /></NavLink>
                <NavLink to={`/en/${page}`} onClick={setLanguage} activeClassName="active">
                    <img src={enFlag} alt="English" title="English" data-lang="en" /></NavLink>
                <NavLink to={`/bg/${page}`} onClick={setLanguage} activeClassName="active">
                    <img src={bgFlag} alt="Български" title="Български" data-lang="bg" /></NavLink>
            </div>
        )
    }
}