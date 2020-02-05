import React from 'react';
import { Route } from 'react-router';
import MasterComponent from './MasterComponent';
import Rules from './Rules';

export default (
  <Route path='/master' component={MasterComponent}>
    <Route path='/rules' component={Rules} />
    
  </Route>
);