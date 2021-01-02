import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact itemClicked={props.itemClicked} label="HOME"/>
        <NavigationItem link='/aboutme' itemClicked={props.itemClicked} label="ABOUT ME"/>
        <NavigationItem link='/projects' itemClicked={props.itemClicked} label="PROJECTS"/>
    </ul>
);

export default navigationItems;