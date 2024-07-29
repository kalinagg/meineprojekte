import React, { Component } from 'react';
import { projectsBg } from './projects-data-bg'
import { projectsDe } from './projects-data-de'
import { projectsEn } from './projects-data-en'
import { translate } from '../utils';
import './projects.css';

export default class TextBoxProjects extends Component {
    render() {
        const {language} = this.props;
        const projects = translate(language, projectsBg, projectsDe, projectsEn);

        return (
            <main>
                <section>
                    {projects.map(project => (
                        <article className="projects-article" key={project.id}>
                            <h2 className="projects-h2">{project.title}</h2>
                            <h3>{project.subtitle} — {project.year}</h3>
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