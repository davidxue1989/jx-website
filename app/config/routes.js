import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import PatientResources from '../components/PatientResources';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/PatientResources" component={PatientResources} />
    <IndexRoute component={Home} />
  </Route>
);