import React from 'react';

export const Heading = ({text, cursive}) => {
    return(
        <h1 className={cursive === 'true' ? 'cursive' : ''}>{text}</h1>
    )
}