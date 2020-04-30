import React, { Component } from 'react';
import './LogoNavigation.css';
import logoText from './images/LogoText.svg';
import { Link } from 'react-router-dom';

export default class LogoNavigation extends Component {
    render() {
        return (					 
			<main className="page-logo">
				<nav aria-label="Main" className="page-logo-image">
					<ul>
						<li><Link className="page-logo-link page-logo-purple" to="/projects">Projekte</Link></li>
						<li><Link className="page-logo-link page-logo-grey" to="/service">Service</Link></li>
						<li><Link className="page-logo-link page-logo-light-grey" to="/aboutme">Über mich</Link></li>
						<li><Link className="page-logo-link page-logo-yellow" to="/contact">Kontakt</Link></li>
					</ul>
				</nav>
				<img className="page-logo-word" src={logoText} alt="Kalina Georgieva Graphic Design" />
			</main>
        )
    }
}

// LogoNavigation.propTypes = {

// }