import React, { Component } from 'react';
import LogoSmall from './images/logo.svg';

export default class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <a href="index.php"><img src={LogoSmall} alt="Kalina Georgieva Graphic Design" /></a>
            </div>                
        )
    }
}