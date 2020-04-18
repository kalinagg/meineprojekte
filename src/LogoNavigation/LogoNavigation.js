import React, { Component } from 'react';
import './LogoNavigation.css';
import logoText from './images/LogoText.svg';
// import PropTypes from 'prop-types';

export default class LogoNavigation extends Component {

    render() {
        return (					 
			<div className="page-logo">				
				<div className="page-logo-image page-links">					
					<div className="page-logo-purple">						
						<a href="projects.php">Projekte</a>
					</div>
					<div className="page-logo-grey">
						<a href="service.php">Service</a>
					</div>					
					<div className="page-logo-light-grey">
						<a href="about-me.php" className="page-link-dark">Über mich</a>
					</div>
					<div className="page-logo-yellow">
						<a href="contact.php" className="page-link-small">Kontakt</a>
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