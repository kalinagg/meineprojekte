import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="foot-container">
                <nav aria-label="Footer">
                    <ul className="foot">
                        <li><Link to="/">Startseite</Link></li>
                        <li><Link to="projects">Projekte</Link></li>
                        <li><Link to="cv">Lebenslauf</Link></li>
                        <li><Link to="aboutme">Über mich</Link></li>
                        <li><Link to="contact">Kontakt</Link></li>
                        <li><Link to="contact">Impressum</Link></li>
                    </ul>
                </nav>
                <p className="clear">&copy; Copyright 2020 Kalina Georgieva. Alle Rechte vorbehalten.</p>
            </footer>
        )
    }
}