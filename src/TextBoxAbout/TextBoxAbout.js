import React, { Component } from 'react';
import './TextBoxAbout.css';
import Me from './images/me.png';
import MeLandscape from './images/meLandscape.png';
import MeLandscapeSmall from './images/meLandscapeSmall.png';

export default class TextBoxAbout extends Component {
    render() {
        return (
        	<main>
				<section className="info-container">
					<article className="info-text" title="Über mich">
						<h2>Erfahren Sie mehr über mich ...</h2>
						<p>Ich bin tätig in den Online Bereich seit 2006. In alle diesen Jahren war ich wichtiges Bestandteil von vielen interessanten Projekten. Die Zusammenarbeit mit Kollegen und auch die selbstängide Ausführung der gestellten Anforderungen macht mir große Freude!</p>
						<p>Die Erfahrung in Photoshop, Illustrator, HTML5/CSS3 und Javascript/jQuery geben mir das Wissen Sceen-Designs, Landing Pages oder ganze Webseiten fertig zu stellen. Ich habe unzählige online Kampagnen für Kunden wie Autodesk realisiert. Die Vertiebswebseite des Projektmanagement-Tool SeedPM, habe ich mit Wordpress entwickelt. Responsive Design, Bootstrap und CSS Präprozessoren wie LESS und SASS gehören auch zu meinen Kompetenzen.</p>
						<p>Und jetzt bin ich auf der Suche nach neuen Herauforderungen, weil ... Grafik- und Webdesign ein Feld ist, wo ich meine Kreativität entfalten kann.</p>
					</article>
					<div className="info-image">
						<img src={Me} alt="eine Foto von mir" className="info-image-portrait" />
						<img src={MeLandscape} alt="eine Foto von mir" className="info-image-landscape" />
						<img src={MeLandscapeSmall} alt="eine Foto von mir" className="info-image-landscape-small" />
					</div>
				</section>
			</main>
        )
    }
}