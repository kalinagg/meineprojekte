import React, { Component } from 'react';
import './TextBoxService.css';

export default class TextBoxService extends Component {
    render() {
        return (
        	<main>
				<section className="service-container">
					<article className="service-text service-small" title="Logo Design">
						<h2>Logo Design</h2>
						<p>Ein Logo steht im Vordergrund bei jedem online und offline Auftritt. Für mich die präzise Ausarbeitung bis zum letzten Detail, macht das Unterschied.</p>
						<p>Ich biete Ausarbeitung von:</p>
							<ul>
								<li>Wortmarken;</li>
								<li>Bildmarken;</li>
								<li>Markenidentitäten.</li>
							</ul>
					</article>
					<article className="service-text service-large" title="Grafik- und Webdesign">
						<h2>Grafik- und Webdesign</h2>
						<p>Nachdem das Logo schon "am Leben" ist, kommt den wichtigsten Teil bei einem Online Auftritt - die eigene Webseite. Eine Webseite, die responsive ist.</p>
						<ul>
							<li>Am Anfang kommt ein allgemainer Entwurf der Seite, gefolg von Ausarbeitung der konkreten Wireframes;</li>
							<li>Die Wireframes werde ich mit Adobe Photoshop zu einem Layout vorbereiten;</li>
							<li>Mit den Technologien HTML/CSS, Javascript/jQuery werde ich das Layout in einem fertigen Produkt verwandeln.</li>
						</ul>
					</article>
				</section>
			</main>
        )
    }
}