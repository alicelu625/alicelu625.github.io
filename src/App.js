import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutMe from './containers/AboutMe/AboutMe';

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/" component={Home}/>
      </Switch>
    );
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
