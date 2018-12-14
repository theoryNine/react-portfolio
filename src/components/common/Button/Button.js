import React from 'react';

export const Button = ({url, buttonText}) => {
    return(
        <div>
            <a href={url}>
                <button type="button">{buttonText}</button>
            </a>
        </div>
    )
};