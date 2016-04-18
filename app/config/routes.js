import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="/About" component={About} />
    <IndexRoute component={Home} />
  </Route>
);