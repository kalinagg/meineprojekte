import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav-container" aria-label="Main">
                <NavLink to="/projects" activeClassName="active">
                    <span>Projekte</span>
                </NavLink>
                <NavLink to="/service" activeClassName="active">
                    <span>Service</span>
                </NavLink>			  
                <NavLink to="/aboutme" activeClassName="active">
                    <span>Über mich</span>
                </NavLink>			  
                <NavLink to="/contact" activeClassName="active">
                    <span>Kontakt</span>
                </NavLink>                
            </nav>
        )
    }
}