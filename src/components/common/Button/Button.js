import React from 'react';

export const Button = ({url, label}) => {
    return(
        <div>
            <a href={url}>
                <button type="button">{label}</button>
            </a>
        </div>
    )
};