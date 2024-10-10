import React, { Component } from 'react';
import DownloadIcon from './images/download-icon.svg';
import DownloadFileDe from './files/kalina-georgieva-creative-cv-de.pdf';
import DownloadFileEn from './files/kalina-georgieva-creative-cv-en.pdf';
import DownloadFileBg from './files/kalina-georgieva-creative-cv-bg.pdf';
import './cv.css';
import { translate } from '../utils';
import { cvBg } from './cv-bg';
import { cvDe } from './cv-de';
import { cvEn } from './cv-en';

export default class Cv extends Component {
	render() {
		const {language} = this.props;
		const cv = translate(language, cvBg, cvDe, cvEn);
		const downloadFile = translate(language, DownloadFileBg, DownloadFileDe, DownloadFileEn);

		return (
			<main>
				<section className="text-box-cv-container">
					<article className="text-box-cv-text" title="Lebenslauf">
						<h2>{cv.title}</h2>
						<p>{cv.text}</p>
						<p className='text-box-cv-icon'>
							<a href={downloadFile} className='text-box-cv-icon-link' download>
								<img src={DownloadIcon} alt="Lebenslauf herunterladen" />
							</a>
						</p>
					</article>
				</section>
			</main>
		)
	}
}