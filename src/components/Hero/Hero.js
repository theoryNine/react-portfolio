import React from 'react';
import { Button } from '../../components/common/Button/Button.js';
import { Heading } from '../../components/common/Heading/Heading.js';
import { SubHead } from '../../components/common/SubHead/SubHead.js';

export const Hero = ({
    name, 
    job, 
    buttonUrl, 
    buttonLabel, 
    headerClasses, 
    subheadClasses
}) => {
    return(
        <div>
            <Heading text={name} classes={headerClasses} />
            <SubHead text={job} classes={subheadClasses} />
            <Button url={buttonUrl} label={buttonLabel} />
        </div>
    )
};