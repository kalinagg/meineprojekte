import React, { Component } from 'react';
import './TextBoxAbout.css';
import me from './images/me.png'

export default class TextBoxAbout extends Component {
    render() {
        return (
        	<main>
				<section className="info-container">
					<article className="info-text" title="Über mich">
						<h2>Über mich</h2>						
						<p>Ich bin Kalina und bin leidenschaftliche UX UI Designerin auf selbständiger Basis.</p>
						<p>Die 17 Jahren Berufserfahrung in der digitalen Welt und die Kombination aus technisches Know-How, nutzerorientieres Denken und professionelles Design geben mir die Zuversicht, dass ich eine Position als UX UI Designerin meistern kann. Mit Tools wie Firma, Photoshop, Illustrator und Design Systeme wie Material Design und Bootstrap bin ich sehr gut vertraut. Dazu habe ich Erfahrung mit HTML, CSS, Javascript, Typescript, React, Angular. Zu meiner persönlichen Stärken zählen Kommunikation, Empathie und stetiges Streben nach  Selbstoptimierung.</p>
						<p>Als UX UI Designerin will ich die User Experience in der digitalen Welt verbessern - egal wo - das könnte eine digitale App sein, ein online Shop, oder sogar die Erstellung von User Interface Standards, die alle nutzen.</p>
						<p>Ich hoffe, ich habe Ihre Interesse geweckt und stehe für ein persönliches Gespräch zur Verfügung!</p>						
					</article>
					<article className="info-text">
						<img src={me} className="info-img" alt="my photo" />
					</article>	
				</section>
			</main>
        )
    }
}