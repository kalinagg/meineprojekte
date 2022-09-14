import React, { Component } from 'react';
import DownloadIcon from './images/download-icon.svg';
import DownloadFile from './files/kalina-georgieva-cv-de.pdf'
import './TextBoxCV.css';

export default class TextBox extends Component {
	render() {
		return (
			<main>
				<section className="text-box-cv-container">
					<article className="text-box-cv-text" title="Lebenslauf">
						<h2>Mein Lebenslauf</h2>
						<p>Hier können Sie mein Lebenslauf in PDF Format herunterladen</p>
						<p className='text-box-cv-icon'>
							<a href={DownloadFile} className='text-box-cv-icon-link' download>
								<img src={DownloadIcon} alt="Lebenslauf herunterladen" />
							</a>
						</p>
					</article>
				</section>
			</main>
		)
	}
}