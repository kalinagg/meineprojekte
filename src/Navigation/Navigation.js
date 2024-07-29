import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import { translate } from '../utils';
import { navigationEn } from './navigation-en';
import { navigationDe } from './navigation-de';
import { navigationBg } from './navigation-bg';


export default class Navigation extends Component {
    render() {
        const {language} = this.props;
        const navigation = translate(language, navigationBg, navigationDe, navigationEn);

        return (
            <nav className="nav-container" aria-label="Main">
                <NavLink to={`/${language}/projects`} activeClassName="active">
                    <span>{navigation.text1}</span>
                </NavLink>
                <NavLink to={`/${language}/cv`} activeClassName="active">
                    <span>{navigation.text2}</span>
                </NavLink>			  
                <NavLink to={`/${language}/aboutme`} activeClassName="active">
                    <span>{navigation.text3}</span>
                </NavLink>			  
                <NavLink to={`/${language}/contact`} activeClassName="active">
                    <span>{navigation.text4}</span>
                </NavLink>                
            </nav>
        )
    }
}