import React, {Component, Fragment} from 'react';

import HomeSummary from '../../components/Home/HomeSummary/HomeSummary';
import FeaturedSkills from '../../components/Home/FeaturedSkills/FeaturedSkills';
import FeaturedProjects from '../../components/Home/FeaturedProjects/FeaturedProjects';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <Fragment>
                <HomeSummary/>
                <FeaturedSkills/>
                <FeaturedProjects/>
            </Fragment>
        );
    }
}

export default Home;