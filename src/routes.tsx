import * as React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './App'
import Sample from './Sample'

export default (
  <Route path="/">
    <IndexRedirect to={`${__PUBLICPATH__}`}/>
    <Route path={`${__PUBLICPATH__}`} component={App}>
      <IndexRedirect to={`${__PUBLICPATH__}/sample`} />
      <Route path={`${__PUBLICPATH__}/sample`} component={Sample} />
    </Route>
  </Route>
);