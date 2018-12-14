import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead';
import { SkillItem } from './SkillItem/SkillItem.js';

export const Skills = () => {
    return(
        <div>
            <SectionHead sectionLabel="Skills, Tools, & Certifications" />
            <ul>
                <SkillItem skillLabel="Certified Adobe AEM Developer" brand="adobe" />
            </ul>
            <ul>
                <SkillItem skillLabel="HTML/HTML5" brand="html" />
                <SkillItem skillLabel="CSS/CSS3" brand="css" />
                <SkillItem skillLabel="JavaScript (ES6)" brand="javascript" />
                <SkillItem skillLabel="Gulp/Webpack" brand="gulp" />
                <SkillItem skillLabel="SASS/LESS/Stylus" brand="sass" />
                <SkillItem skillLabel="jQuery" brand="jquery" />
                <SkillItem skillLabel="WordPress" brand="wordpress" />
                <SkillItem skillLabel="PostCSS" brand="postcss" />
                <SkillItem skillLabel="PHP" brand="php" />
                <SkillItem skillLabel="SQL" brand="sql" />
                <SkillItem skillLabel="D3.js" brand="d3" />
                <SkillItem skillLabel="Vue" brand="vue" />
                <SkillItem skillLabel="Agile Processes" brand="agile" />
                <SkillItem skillLabel="Responsive Design" brand="design" />
            </ul>
        </div>
    )
}