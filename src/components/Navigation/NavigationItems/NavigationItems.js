import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact itemClicked={props.itemClicked}>
            <span className={classes.NavText}>HOME</span>
        </NavigationItem>
        <NavigationItem link='/aboutme' itemClicked={props.itemClicked}>
            <span className={classes.NavText}>ABOUT ME</span>
        </NavigationItem>
        <NavigationItem link='/projects' itemClicked={props.itemClicked}>
            <span className={classes.NavText}>PROJECTS</span>
        </NavigationItem>
    </ul>
);

export default navigationItems;