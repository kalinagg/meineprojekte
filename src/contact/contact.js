import React, { Component } from 'react';
import './contact.css';
import { translate } from '../utils';
import { contactBg } from './contact-bg';
import { contactDe } from './contact-de';
import { contactEn } from './contact-en';

export default class Contact extends Component {
    render() {
        const {language} = this.props
        const contact = translate(language, contactBg, contactDe, contactEn);

        return (
            <main>
                <section className="contact-container">
                    <article className="contact-text" title="Kontakt">
                        <h2>{contact.title}</h2>
                        <p>{contact.text1}</p>
                        <p>{contact.text2}<span style={{display: 'none'}}>{contact.text3}</span>{contact.text4}</p>
                        <p>{contact.text5}</p>
                        <p>{contact.text6}</p>
                        <p>{contact.text7}<a href="https://de.linkedin.com/in/kalina-georgieva-2a365744" target="_blank" rel="noopener noreferrer">{contact.text8}</a></p>
                        <p>{contact.text9} <a href={contact.link}>{contact.text10}</a></p>
                    </article>
                </section>
            </main>
        )
    }
}