import React from 'react';
import {FiMenu} from 'react-icons/fi';

import classes from './TopNavigation.module.css';
import WebsiteLogo from '../../../assets/images/website-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';

const topNavigation = (props) => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("topnav").style.top = "0";
        } else {
            if (prevScrollPos < 0) {
                document.getElementById("topnav").style.top = "0";
            }
            else {
                document.getElementById("topnav").style.top = "-72px";
            }
        }
        prevScrollPos = currentScrollPos;
    }

    return (
        <header>
            <div id="topnav" className={classes.TopNavigation}>
                <a href="/">
                    <img className={classes.WebsiteLogo} src={WebsiteLogo} alt="Alice's website logo"/>
                </a>
                <FiMenu className={classes.MenuIcon} onClick={props.drawerToggled}/>
                <div className={classes.NavigationItems}>
                    <NavigationItems/>
                </div>
            </div>
        </header>
    );
}

export default topNavigation;