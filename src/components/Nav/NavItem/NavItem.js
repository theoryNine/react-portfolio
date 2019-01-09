import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavItem = ({itemLink, itemLabel}) => {
    return(
        <AnchorLink href={itemLink}><li>{itemLabel}</li></AnchorLink>
    )
}