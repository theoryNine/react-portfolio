import React from 'react';
import { SectionHead } from '../common/SectionHead/SectionHead';
import { SkillItem } from './SkillItem/SkillItem.js';

export const Skills = () => {
    return(
        <div className="skills section container" id="skills">
            <SectionHead sectionLabel="Skills, Tools, & Certifications" />
            <ul>
                <SkillItem skillLabel="Certified Adobe AEM Developer" brand="adobe" color="adobeOrange" url="https://www.adobe.com/marketing/experience-manager.html" />
            </ul>
            <ul>
                <SkillItem skillLabel="HTML/HTML5" brand="html" color="htmlOrange" url="https://en.wikipedia.org/wiki/HTML" />
                <SkillItem skillLabel="CSS/CSS3" brand="css" color="cssBlue" url="https://developer.mozilla.org/en-US/docs/Web/CSS" />
                <SkillItem skillLabel="JavaScript (ES6)" brand="javascript" color="jsYellow" url="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                <SkillItem skillLabel="ReactJS" brand="react" color="reactBlue" url="https://reactjs.org/" />
                <SkillItem skillLabel="Gulp/Webpack" brand="gulp" color="red" url="https://gulpjs.com/" />
                <SkillItem skillLabel="SASS/LESS/Stylus" brand="sass" color="pink" url="https://sass-lang.com/" />
                <SkillItem skillLabel="jQuery" brand="jquery" color="jqueryBlue" url="https://jquery.com/" />
                <SkillItem skillLabel="WordPress" brand="wordpress" color="wpBlue" url="https://wordpress.com/" />
                <SkillItem skillLabel="PostCSS" brand="postcss" color="postOrange" url="https://postcss.org/" />
                <SkillItem skillLabel="PHP" brand="php" color="phpBlue" url="http://www.php.net/" />
                <SkillItem skillLabel="SQL" brand="sql" color="sqlOrange" url="https://en.wikipedia.org/wiki/SQL" />
                <SkillItem skillLabel="D3.js" brand="d3" color="d3Orange" url="https://d3js.org/" />
                <SkillItem skillLabel="Vue" brand="vue" color="vueGreen" url="https://vuejs.org/" />
                <SkillItem skillLabel="Agile Processes" brand="agile" color="cssBlue" url="https://en.wikipedia.org/wiki/Agile_software_development" />
                <SkillItem skillLabel="Responsive Design" brand="design" color="red" url="https://www.w3schools.com/html/html_responsive.asp" />
            </ul>
        </div>
    )
}