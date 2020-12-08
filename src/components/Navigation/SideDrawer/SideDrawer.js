import React, {Fragment} from 'react';

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
            <div>
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <nav>
                        <NavigationItems/>
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default sideDrawer;