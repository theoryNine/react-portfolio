import React from 'react';

export const SkillItem = ({skillLabel, brand}) => {
    return(
        <li className={brand}>{skillLabel}</li>
    )
}