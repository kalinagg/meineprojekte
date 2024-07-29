import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoNavigationBg } from './logo-navigation-bg';
import { logoNavigationDe } from './logo-navigation-de';
import { logoNavigationEn } from './logo-navigation-en';
import { translate } from '../utils';
import './logo-navigation.css';

export default class LogoNavigation extends Component {
    render() {
		const {language} = this.props;
		const logoNavigation = translate(language, logoNavigationBg, logoNavigationDe, logoNavigationEn);

        return (					 
			<main className="page-logo">
				<nav aria-label="Main" className="page-logo-image">
					<ul>
						<li><Link className="page-logo-link page-logo-purple" to={`/${language}/projects`}>{logoNavigation.text1}</Link></li>
						<li><Link className="page-logo-link page-logo-grey" to={`/${language}/cv`}>{logoNavigation.text2}</Link></li>
						<li><Link className="page-logo-link page-logo-light-grey" to={`/${language}/aboutme`}>{logoNavigation.text3}</Link></li>
						<li><Link className="page-logo-link page-logo-yellow" to={`/${language}/contact`}>{logoNavigation.text4}</Link></li>
					</ul>
				</nav>
				<div className='page-logo-text'>
					<h1 className='page-logo-text-1'>Kalina.<span>Style</span></h1>
					<h2 className='page-logo-text-2'>UX / UI Design</h2>
				</div>
			</main>
        )
    }
}