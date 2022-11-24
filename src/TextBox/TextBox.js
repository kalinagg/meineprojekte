import React, { Component } from 'react';
import './TextBox.css';

export default class TextBox extends Component {
    render() {
        return (
            <main>
                <section className="contact-container">
                    <article className="contact-text" title="Kontakt">
                        <h2>Kontakt / Impressum</h2>
                        <p>Kalina Georgieva Design & Development</p>
                        <p>Email: kalinagg<span style={{display: 'none'}}>diesen Text entfernen</span>@yahoo.de</p>
                        <p>Tel: +49 176 786 420 47</p>
                        <p>Adresse: 81539 München, Deutschland</p>
                        <p>LinkedIn: <a href="https://de.linkedin.com/in/kalina-georgieva-2a365744" target="_blank" rel="noopener noreferrer">Kalina auf LinkedIn</a></p>
                        <p>Web: <a href="https://kalinagg.github.io/meineprojekte">Meine Projekte</a></p>
                    </article>
                </section>
            </main>
        )
    }
}