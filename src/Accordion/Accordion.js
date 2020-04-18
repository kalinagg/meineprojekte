import React, { Component } from 'react';
import {acc} from './AccordionData';
import './Accordion.css';

export default class Accordion extends Component {
    handleOpen = (event, id) => {
        this.open();
    }

    open = (event, id) => {
        return event.currentTarget === id ? 'acc acc-open' : 'acc';
    }

    render() {
        return (
            <article className="accordion">
                {acc.map(item => (
                    <section
                        key={item.id}
                        onClick={e => this.handleOpen(e, item.id)}
                        className={this.open ? 'acc acc-open' : 'acc'}>
                        <div className="image-container">
                            <img src={item.image} alt={item.title} />
                        </div>					
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                        <p>{item.text}</p>
                    </section>
                ))}
            </article>
        )
    }
}