import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div className="foot-container">
                <ul className="foot">
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="projects">Projekte</Link></li>
                    <li><Link to="service">Service</Link></li>
                    <li><Link to="aboutme">Über mich</Link></li>
                    <li><Link to="contact">Kontakt</Link></li>
                    <li><Link to="contact">Impressum</Link></li>
                </ul>
                <p className="clear">&copy; Copyright 2020 Kalina Georgieva. Alle Rechte vorbehalten.</p>
            </div>
        )
    }
}