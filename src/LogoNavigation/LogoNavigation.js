import React, { Component } from 'react';
import './LogoNavigation.css';
import logoText from './images/LogoText.svg';
import { Link } from 'react-router-dom';

export default class LogoNavigation extends Component {
    render() {
        return (					 
			<div className="page-logo">				
				<div className="page-logo-image page-links">					
					<div className="page-logo-purple">						
						<Link to="/projects">Projekte</Link>
					</div>
					<div className="page-logo-grey">
						<Link to="/service">Service</Link>
					</div>					
					<div className="page-logo-light-grey">
						<Link to="/aboutme" className="page-link-dark">Über mich</Link>
					</div>
					<div className="page-logo-yellow">
						<Link to="/contact" className="page-link-small">Kontakt</Link>
					</div>	
				</div>
				<div className="page-logo-word">
					<img src={logoText} alt="Kalina Georgieva Graphic Design" />					 
				</div>
			</div>					
        )
    }
}

// LogoNavigation.propTypes = {

// }