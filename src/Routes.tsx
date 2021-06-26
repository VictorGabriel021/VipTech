import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './core/components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>

        </Route>
        <Route path="/users" exact>

        </Route>
        <Route path="/users/:userId">
            
        </Route>
   </Switch>
  </BrowserRouter>
);

export default Routes;
