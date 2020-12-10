import React, {Fragment} from 'react';
import {CgClose} from 'react-icons/cg';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} backdropClicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <CgClose className={classes.CloseIcon} onClick={props.closed}></CgClose>
                <nav className={classes.NavItems}>
                    <NavigationItems itemClicked={props.closed}/>
                </nav>
            </div>
        </Fragment>
    )
}

export default sideDrawer;