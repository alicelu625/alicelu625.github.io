import React, {Component, Fragment} from 'react';

import Intro from '../../components/AboutMe/Intro/Intro';
import Skills from '../../components/AboutMe/Skills/Skills';
import Education from '../../components/AboutMe/Education/Education';
import Experience from '../../components/AboutMe/Experience/Experience';

class AboutMe extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <Fragment>
                <Intro/>
                <Skills/>
                <Education/>
                <Experience/>
            </Fragment>
        );
    }
}

export default AboutMe;