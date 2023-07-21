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
						<p>Mein Name ist Kalina. Ich bin leidenschaftliche UX UI Designerin und kreiere Designs für digitale Produkte oder verbessere deren Nutzbarkeit. Das könnte eine App, ein Online-Shop oder ein digitales Ökosystem sein.</p>						
						<p>Ein gutes digitales Produkt hat mehrere Aspekte in sich, die gut zusammen harmonieren — Inhalte, Bilder, Farben und Schriften. Es ist intuitiv und einfach zu bedienen. Es ist wie unsichtbar und trotzdem da.</p>
						<p>Der Benutzer macht gute Erfahrung bei der Nutzung des Produktes. Dadurch entsteht ein Gefühl der Zufriedenheit und er wendet das Produkt immer wieder an.</p>
						<p className="last">Eine Gemeinschaft, die das Produkt regelmäßig einsetzt, entsteht. Durch die Nutzung wird Gewinn für den Produktinhaber generiert. Die Gemeinschaft profitiert auch, weil sie ein Teil ihrer Wünsche durch das Produkt erfüllen kann.</p>
					</article>
					<article className="info-text info-img-container">
						<img src={me} className="info-img" alt="my photo" />
					</article>	
				</section>
			</main>
        )
    }
}