import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

export default class Header extends Component {
    render() {
        return (
            <header className="head">
                <Logo />
                <Navigation />
            </header>
        )
    }
}