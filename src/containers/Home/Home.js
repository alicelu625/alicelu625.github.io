import React, {Component, Fragment} from 'react';

import HomeSummary from '../../components/Home/HomeSummary/HomeSummary';
import FeaturedSkills from '../../components/Home/FeaturedSkills/FeaturedSkills';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <HomeSummary/>
                <FeaturedSkills/>
            </Fragment>
        );
    }
}

export default Home;