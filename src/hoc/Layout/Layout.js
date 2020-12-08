import React, {Component, Fragment} from 'react';

import TopNavigation from '../../components/Navigation/TopNavigation/TopNavigation';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <Fragment>
                <TopNavigation drawerToggled={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;