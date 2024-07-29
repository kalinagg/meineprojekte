import React, { Component } from 'react';
import LogoSmall from './images/logo.svg';
import { Link } from 'react-router-dom';
import { logoBg } from './logo-bg';
import { logoDe } from './logo-de';
import { logoEn } from './logo-en';
import { translate } from '../utils';
import './logo.css';

export default class Logo extends Component {
    render() {
        const {language} = this.props;
        const logo = translate(language, logoBg, logoDe, logoEn);

        return (
            <div className="logo-container">
                <Link to="/" title={logo.title}>
                    <img src={LogoSmall} alt="Kalina.Style UX / UI Design" />
                </Link>
            </div>
        )
    }
}