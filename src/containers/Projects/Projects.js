import React, {Component} from 'react';

import classes from './Projects.module.css';
import ProjectItems from '../../components/ProjectItems/ProjectItems';

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div className={classes.Projects}>
                <h1 className={classes.Title}>Projects</h1>
                <ProjectItems/>
            </div>
        );
    }
}

export default Projects;