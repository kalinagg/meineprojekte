import React, { Component } from 'react';
import './LogoNavigation.css';
import { Link } from 'react-router-dom';

export default class LogoNavigation extends Component {
    render() {
        return (					 
			<main className="page-logo">
				<nav aria-label="Main" className="page-logo-image">
					<ul>
						<li><Link className="page-logo-link page-logo-purple" to="/projects">Projekte</Link></li>
						<li><Link className="page-logo-link page-logo-grey" to="/cv">Lebenslauf</Link></li>
						<li><Link className="page-logo-link page-logo-light-grey" to="/aboutme">Über mich</Link></li>
						<li><Link className="page-logo-link page-logo-yellow" to="/contact">Kontakt</Link></li>
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