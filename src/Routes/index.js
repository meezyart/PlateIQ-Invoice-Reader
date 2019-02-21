import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Invoices from '../containers/Invoices/'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Invoices}/>
      <Route path="/:section" component={Invoices}/>
      {/* <Route path="/Launches/:id" component={LaunchesPageDetail}/> */}
    </Switch>
  </Router>
);

export default Routes;
