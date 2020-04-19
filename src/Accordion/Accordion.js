import React, { Component } from 'react';
import {acc} from './AccordionData';
import './Accordion.css';

export default class Accordion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            openId: 1
        }
    }

    toggle = (id) => {
        this.setState({
            open: this.state.openId === id && !this.open,
            openId: id
        });
    }

    isFirst(index) {
        return index === 0;
    }

    active(e, id) {
        return e.currentTarget === id ? 'acc acc-open' : 'acc';
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
                        <p>{item.text}</p>
                    </section>
                ))}
            </article>
        )
    }
}