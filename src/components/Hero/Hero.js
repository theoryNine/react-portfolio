import React from 'react';
import { Button } from '../../components/common/Button/Button.js';
import { Heading } from '../../components/common/Heading/Heading.js';
import { SubHead } from '../../components/common/SubHead/SubHead.js';
import Resume from '../../assets/files/Ansel Colvin Resume.pdf';

export const Hero = () => {
    return(
        <div className="hero section container flex column center-all">
            <Heading text="Ansel Colvin" cursive="yes" />
            <SubHead text="Front End Developer" />
            <Button url={Resume} buttonText="Download Resume" openInNew="yes" />
        </div>
    )
};