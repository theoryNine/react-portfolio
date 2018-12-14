import React from 'react';

export const SubHead = ({text, cursive}) => {
    return(
        <h2 className={cursive === 'true' ? 'cursive' : ''}>{text}</h2>
    )
}