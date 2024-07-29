import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { footerBg } from './footer-bg';
import { footerDe } from './footer-de';
import { footerEn } from './footer-en';
import { translate } from '../utils';
import './footer.css';

export default class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        const {language} = this.props;
        const footer = translate(language, footerBg, footerDe, footerEn);

        return (
            <footer className="foot-container">
                <nav aria-label="Footer">
                    <ul className="foot">
                        <li><Link to="/">{footer.text1}</Link></li>
                        <li><Link to="projects">{footer.text2}</Link></li>
                        <li><Link to="cv">{footer.text3}</Link></li>
                        <li><Link to="aboutme">{footer.text4}</Link></li>
                        <li><Link to="contact">{footer.text5}</Link></li>
                    </ul>
                </nav>
                <p className="clear">&copy; {footer.text6} {currentYear} {footer.text7}</p>
            </footer>
        )
    }
}