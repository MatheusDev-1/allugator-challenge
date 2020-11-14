import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Funcionarios from '../pages/Funcionarios';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/funcionarios" exact component={Funcionarios} />
  </Switch>
);

export default Routes;
