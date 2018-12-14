import React from 'react';
import { Button } from '../../components/common/Button/Button.js';
import { Heading } from '../../components/common/Heading/Heading.js';
import { SubHead } from '../../components/common/SubHead/SubHead.js';

export const Hero = () => {
    return(
        <div className="hero container">
            <Heading text="Ansel Colvin" cursive="yes" />
            <SubHead text="Front End Developer" />
            <Button url="#" label="Download Resume" />
        </div>
    )
};