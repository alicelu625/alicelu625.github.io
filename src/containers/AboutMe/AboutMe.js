import React, {Component, Fragment} from 'react';

import Intro from '../../components/AboutMe/Intro/Intro';
import Skills from '../../components/AboutMe/Skills/Skills';
import Education from '../../components/AboutMe/Education/Education';

class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <Intro/>
                <Skills/>
                <Education/>
            </Fragment>
        );
    }
}

export default AboutMe;