import React from 'react';

export const SkillItem = ({color, skillLabel, brand, url}) => {
    return(
        <a href={url} target="_blank" rel="noopener noreferrer">
            <li className={'color-box ' + color}>
                <div className={'skill-name ' + brand}>{skillLabel}</div>
            </li>
        </a>
    )
}