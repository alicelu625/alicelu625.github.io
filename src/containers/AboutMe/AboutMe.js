import React, {Component, Fragment} from 'react';

import Intro from '../../components/AboutMe/Intro/Intro';
import Skills from '../../components/AboutMe/Skills/Skills';

class AboutMe extends Component {
    render() {
        return (
            <Fragment>
                <Intro/>
                <Skills/>
            </Fragment>
        );
    }
}

export default AboutMe;