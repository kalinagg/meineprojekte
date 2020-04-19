import React, { Component } from 'react';
import './TextBox.css';

export default class TextBox extends Component {
    render() {
        return (
            <section className="contact-container">								
				<article className="contact-text">
					<h2>Kontakt / Impressum</h2>					
					<p>Kalina Georgieva Graphic Design</p>					
					<p>Email: kalinagg<span style={{display: 'none'}}>diesen Text entfernen</span>@yahoo.de<br />
                    Web: <a href="http://meineprojekte.eu3.org">meineprojekte.eu3.org</a></p>
					<p>Tel: +49 176 786 420 47<br />Adresse: 81539 München, Deutschland</p>
                </article>							
			</section>
        )
    }
}