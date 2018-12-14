import React from 'react';
import { Button } from '../../components/common/Button/Button.js';
import { Heading } from '../../components/common/Heading/Heading.js';
import { SubHead } from '../../components/common/SubHead/SubHead.js';

export const Hero = () => {
    return(
        <div>
            <Heading text="Ansel Colvin" cursive="true" />
            <SubHead text="Front End Developer" cursive="false" />
            <Button url="#" label="Download Resume" />
        </div>
    )
};