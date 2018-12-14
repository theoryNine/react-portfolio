import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead.js';
import { Project } from './Project/Project.js';

export const Projects = () => {
    return(
        <div>
            <SectionHead sectionLabel="Projects" />
            <Project projectLabel="Spectrum Residential" />
            <Project projectLabel="Spectrum Business" />
            <Project projectLabel="New York Life" />
            <Project projectLabel="AT&T" />
            <Project projectLabel="Abilene Christian University" />
            <Project projectLabel="Coast CRM" />
            <Project projectLabel="Fresh Image Center of Dallas" />
        </div>
    )
}