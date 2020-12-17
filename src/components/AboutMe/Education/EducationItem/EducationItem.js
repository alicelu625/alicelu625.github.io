import React from 'react';

import classes from './EducationItem.module.css';

const educationItem = (props) => {
    return (
        <div className={classes.EducationItem}>
            <div className={classes.EducationDiv}>
                <div className={classes.LogoDiv}>
                    <img className={classes.Logo} src={props.logo} alt={props.altText}/>
                </div>
                <div className={classes.Header}>
                    <p className={classes.Name}>{props.name}</p>
                    <p className={classes.Date}>{props.date}</p>
                </div>
            </div>
            <div>
                <p>^</p>
                {props.showDetails
                    ? <div>
                        {props.course}
                        {props.content}
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default educationItem;