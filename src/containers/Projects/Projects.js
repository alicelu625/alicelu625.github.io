import React, {Component, Fragment} from 'react';

import classes from './Projects.module.css';
import ProjectItems from '../../components/ProjectItems/ProjectItems';

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <h2 className={classes.Title}>Projects</h2>
                <ProjectItems/>
            </Fragment>
        );
    }
}

export default Projects;