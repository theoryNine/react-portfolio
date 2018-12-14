import React from 'react';
import { NavItem } from './NavItem/NavItem.js';

export const Nav = () => {
    return(
        <ul className="nav container">
            <NavItem itemLabel="> About Me <" itemLink="#" />
            <NavItem itemLabel="> Skills & Tools <" itemLink="#" />
            <NavItem itemLabel="> Projects <" itemLink="#" />
            <NavItem itemLabel="> Contact <" itemLink="#" />
        </ul>
    )
}