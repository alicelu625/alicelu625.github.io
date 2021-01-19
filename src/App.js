import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import ReactGA from 'react-ga';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutMe from './containers/AboutMe/AboutMe';
import Projects from './containers/Projects/Projects';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

    //report page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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

export default withRouter(App);
