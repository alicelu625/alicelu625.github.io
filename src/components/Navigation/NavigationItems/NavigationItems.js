import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact itemClicked={props.itemClicked}>HOME</NavigationItem>
        <NavigationItem link='/aboutme' itemClicked={props.itemClicked}>ABOUT ME</NavigationItem>
        <NavigationItem link='/projects' itemClicked={props.itemClicked}>PROJECTS</NavigationItem>
    </ul>
);

export default navigationItems;