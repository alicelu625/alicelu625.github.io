import React from 'react';

import classes from './ProjectItem.module.css';

const projectItem = (props) => {
    return(
        <div className={classes.ProjectItem} onClick={() => props.projectClicked(props.id)}>
            <img className={classes.Cover} src={props.cover} alt={props.altText}/>
        </div>
    );
}

export default projectItem;