import React from 'react';

export const SocialItem = ({label, brand, url}) => {
    return(
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={brand}>{label}</div>
        </a>
    )
}