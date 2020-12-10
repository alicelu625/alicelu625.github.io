import React from 'react';

import ProjectItem from './ProjectItem/ProjectItem';
import classes from './ProjectItems.module.css';

const projectItems = () => {
    return(
        <div className={classes.ProjectItems}>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    );
}

export default projectItems;