import React from 'react';

export const NavItem = ({itemLink, itemLabel}) => {
    return(
        <a href={itemLink}><li>{itemLabel}</li></a>
    )
}