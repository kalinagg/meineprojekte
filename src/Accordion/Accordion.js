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
    }

    render() {
        return (
            <article className="accordion">
                {acc.map((item, i) => (
                    <section
                        key={item.id}
                        onClick={() => this.toggle(item.id)}
                        className={this.state.openId === item.id ? 'acc acc-open' : 'acc'}>
                        <div className="image-container">
                            <img src={item.image} alt={item.title} />
                        </div>					
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                        <p dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </section>
                ))}
            </article>
        )
    }
}