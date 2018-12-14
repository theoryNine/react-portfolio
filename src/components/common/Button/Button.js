import React from 'react';

export const Button = ({url, buttonText, openInNew}) => {
    return(
        <div>
            <a href={url} target={ openInNew === "yes" ? '_blank' : '_self' }>
                <button type="button">{buttonText}</button>
            </a>
        </div>
    )
};