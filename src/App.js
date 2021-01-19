import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutMe from './containers/AboutMe/AboutMe';
import Projects from './containers/Projects/Projects';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/projects" component={Projects}/>
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
