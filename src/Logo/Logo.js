import React, { Component } from 'react';
import LogoSmall from './images/logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <Link to="/"><img src={LogoSmall} alt="Kalina Georgieva Graphic Design" /></Link>
            </div>                
        )
    }
}