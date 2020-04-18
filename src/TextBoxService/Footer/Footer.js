import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="foot-container">
                <ul className="foot">
                    <li><a href="index.php">Startseite</a></li>
                    <li><a href="projects.php">Projekte</a></li>
                    <li><a href="service.php">Service</a></li>
                    <li><a href="about-me.php">Über mich</a></li>
                    <li><a href="contact.php">Kontakt</a></li>
                    <li><a href="contact.php">Impressum</a></li>
                </ul>
                <p className="clear">&copy; Copyright 2020 Kalina Georgieva. Alle Rechte vorbehalten.</p>
            </div>
        )
    }
}