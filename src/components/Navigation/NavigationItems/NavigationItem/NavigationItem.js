import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <NavLink 
        className={classes.NavigationItem}
        onClick={props.itemClicked}
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>
        {props.children}
    </NavLink>
);

export default navigationItem;