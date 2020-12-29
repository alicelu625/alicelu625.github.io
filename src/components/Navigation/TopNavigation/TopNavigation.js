import React from 'react';
import {FiMenu} from 'react-icons/fi';

import classes from './TopNavigation.module.css';
import WebsiteLogo from '../../../assets/images/website-logo.png';

const topNavigation = (props) => (
    <header>
        <div className={classes.TopNavigation}>
            <a href="/">
                <img className={classes.WebsiteLogo} src={WebsiteLogo} alt="Alice's website logo"/>
            </a>
            <FiMenu className={classes.MenuIcon} onClick={props.drawerToggled}/>
        </div>
        
    </header>
);

export default topNavigation;