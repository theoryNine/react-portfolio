import React from 'react';

export const Heading = ({text, cursive}) => {
    return(
        <h1 className={cursive === 'yes' ? 'cursive' : ''}>{text}</h1>
    )
}