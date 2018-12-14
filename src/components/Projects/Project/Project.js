import React from 'react';
import { Button } from '../../common/Button/Button.js';

export const Project = ({projectLabel}) => {
    return(
        <div>
            <Button label={projectLabel}></Button>
        </div>
    )
}