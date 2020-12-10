import React from 'react';
import {IoIosArrowForward} from 'react-icons/io';

import classes from './FeaturedProjects.module.css';
import ProjectItem from '../../ProjectItems/ProjectItem/ProjectItem';

const featuredProjects = () => {
    return (
        <div className={classes.FeaturedProjects}>
            <h2 className={classes.Title}>Featured Projects</h2>
            <div className={classes.ProjectItems}>
                <ProjectItem/>
                <ProjectItem/>
            </div>
            <span className={classes.LearnMoreText}>View all projects<IoIosArrowForward className={classes.RightArrowIcon}/></span>
        </div>
    )
}

export default featuredProjects;