import React, { Component } from 'react';
import me from './images/me.jpg'
import { aboutBg } from './about-bg';
import { aboutDe } from './about-de';
import { aboutEn } from './about-en';
import { translate } from '../utils';
import './about.css';

export default class About extends Component {
    render() {
		const {language} = this.props;
		const about = translate(language, aboutBg, aboutDe, aboutEn);
		
        return (
        	<main>
				<section className="info-container">
					<article className="info-text" title={about.title}>
						<h2>{about.title}</h2>						
						<p>{about.text1}</p>
						<p>{about.text2}</p>
						<p>{about.text3}</p>
						<p className="last">{about.text4}</p>
					</article>
					<article className="info-text info-img-container">
						<img src={me} className="info-img" alt="my photo" />
					</article>	
				</section>
			</main>
        )
    }
}