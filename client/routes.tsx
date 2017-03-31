import * as React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';
import App from './App'

import Sample from './Sample'
import CreateUser from 'user/components//CreateUser'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='sample' />
      <Route path="/sample" component={Sample} />
      <Route path="user" component={CreateUser}>
        <Route path='/getall' component={CreateUser} />
        <Route path='/edit' component={CreateUser} />
      </Route>
      <Route path='createuser' component={CreateUser} />
    </Route>
  </Router>
);