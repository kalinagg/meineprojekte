import React, { Component } from 'react';
import './TextBoxAbout.css';
import me from './images/me.jpg'

export default class TextBoxAbout extends Component {
    render() {
        return (
        	<main>
				<section className="info-container">
					<article className="info-text" title="Über mich">
						<h2>Über mich</h2>						
						<p>Mein Name ist Kalina und ich bin leidenschaftliche UX UI Designerin.</p>						
						<p>
							Ich kreiere Designs für digitale Produkte oder verbessere deren Nutzbarkeit. 
							Das könnte eine App, ein online Shop oder ein digitales Ökosystem sein.</p>
						<p>
							Ein gutes digitales Produkt hat mehrere Aspekte in sich, die gut zusammen harmonieren — 
							Inhalte, Bilder, Farben und Schriften. Es ist intuitiv zu nutzen. Es ist wie unsichtbar und trotzdem da.
						</p>
						<p>
							Der Benutzer ist auf sein Werk konzentriert und blendet das Produkt aus.
							In seiner Erinnerung bleibt ein Gefühl der Zufriedenheit und nutzt das Produkt immer wieder.							
						</p>
						<p className="last">So entsteht ein nachhaltiges Produkt, wovon alle profitieren.</p>			
					</article>
					<article className="info-text info-img-container">
						<img src={me} className="info-img" alt="my photo" />
					</article>	
				</section>
			</main>
        )
    }
}