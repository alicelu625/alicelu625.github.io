import React, {Component} from 'react';

import classes from './Projects.module.css';
import ProjectItems from '../../components/ProjectItems/ProjectItems';

class Projects extends Component {
    render() {
        return (
            <div>
                <h2 className={classes.Title}>Projects</h2>
                <ProjectItems/>
            </div>
        );
    }
}

export default Projects;