import React from 'react';
import { NavItem } from './NavItem/NavItem.js';

export const Nav = () => {
    return(
        <ul className="nav section container flex">
            <NavItem itemLabel="> About Me <" itemLink="#" />
            <NavItem itemLabel="> Skills & Tools <" itemLink="#" />
            <NavItem itemLabel="> Projects <" itemLink="#" />
            <NavItem itemLabel="> Contact <" itemLink="#" />
        </ul>
    )
}