import React from 'react';

export const SocialItem = ({label, brand}) => {
    return(
        <div className={brand}>{label}</div>
    )
}