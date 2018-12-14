import React from 'react';

export const ImageBox = ({imageUrl}) => {
    return(
        <div 
            className="image"
            style={{ backgroundImage: `url(${imageUrl.isRequired})` }}>
        </div>
    )
}