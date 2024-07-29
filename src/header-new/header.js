import React, { Component } from 'react';
import Logo from '../logo-new/logo';
import Navigation from '../navigation-new/navigation';
import Language from '../language/language';

export default class Header extends Component {
    render() {
        const {setLanguage, language, page} = this.props;

        return (
            <header className="head">
                <Language setLanguage={setLanguage} page={page} />
                <Logo language={language} />
                <Navigation language={language} />
            </header>
        )
    }
}