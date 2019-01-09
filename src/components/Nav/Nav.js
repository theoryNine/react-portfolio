import React from 'react';
import { NavItem } from './NavItem/NavItem.js';

export const Nav = () => {
    return(
        <ul className="nav section container flex">
            <NavItem itemLabel="> About Me <" itemLink="#about" />
            <NavItem itemLabel="> Skills & Tools <" itemLink="#skills" />
            <NavItem itemLabel="> Projects <" itemLink="#projects" />
            <NavItem itemLabel="> Contact <" itemLink="#contact" />
        </ul>
    )
}