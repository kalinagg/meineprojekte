import React, { Component } from 'react';
import './TextBoxProjects.css';
import {projects} from './TextBoxProjectsData'

export default class TextBoxProjects extends Component {
    render() {
        return (
            <main>
                <section>
                    {projects.map(project => (
                        <article className="projects-article" key={project.id}>
                            <h2 className="projects-h2">{project.title}</h2>
                            <h3>{project.subtitle} — Jahr {project.year}</h3>
                            <p dangerouslySetInnerHTML={{__html: project.text}} />
                            <a href={project.link} title={project.title} target="_blank" className="projects-image-link">
                                <img src={project.image} alt={project.title} width='100%' />
                            </a>
                        </article>
                        )
                    )}
                </section>
            </main>
        )
    }
}