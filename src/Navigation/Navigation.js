import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav-container">
                <ul className="nav">			
                    <li className="nav-active">
                        <Link to="/projects">Projekte</Link>		  
                    </li>
                    <li className="nav-active">
                        <Link to="/service">Service</Link>			  
                    </li>
                    <li className="nav-active">
                        <Link to="/aboutme">Über mich</Link>			  
                    </li>
                    <li className="nav-active">
                        <Link to="/contact">Kontakt</Link>			  
                    </li>
                </ul>
            </div>
        )
    }
}