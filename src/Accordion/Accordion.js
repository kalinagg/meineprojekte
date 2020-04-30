import React, { Component } from 'react';
import {acc} from './AccordionData';
import './Accordion.css';

export default class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openId: 1
        }
    }

    toggle = (id) => {
        this.setState({
            openId: id
        });
    };

    isOpen = (itemId) => {
        return this.state.openId === itemId;
    };

    render() {
        return (
            <main>
                <section className="accordion">
                    {acc.map((item, i) => (
                        <article
                            title={item.title}
                            key={item.id}
                            onClick={() => this.toggle(item.id)}
                            className={this.isOpen(item.id) ? 'acc acc-open' : 'acc'}
                            role={!this.isOpen(item.id) ? 'button' : ''}>
                            <div className="image-container">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p dangerouslySetInnerHTML={{__html: item.text}} />
                        </article>
                    ))}
                </section>
            </main>
        )
    }
}