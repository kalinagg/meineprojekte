import React, { Component } from 'react';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-container">
                <ul className="nav">			
                    <li className="nav-active">
                        <a href="projects.php">Projekte</a>			  
                    </li>
                    <li className="nav-active">
                        <a href="service.php">Service</a>			  
                    </li>
                    <li className="nav-active">
                        <a href="about-me.php">Über mich</a>			  
                    </li>
                    <li className="nav-active">
                        <a href="contact.php">Kontakt</a>			  
                    </li>
                </ul>
            </div>
        )
    }
}