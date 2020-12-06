import React, {Component, Fragment} from 'react';

import TopNavigation from '../../components/Navigation/TopNavigation/TopNavigation';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;