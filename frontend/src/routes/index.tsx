import React from 'react';
import { Switch } from 'react-router-dom';

import Rout from './Route';

import Home from '../pages/Home';
import Funcionarios from '../pages/Funcionarios';

const Routes: React.FC = () => (
  <Switch>
    <Rout path="/" exact component={Home} />
    <Rout path="/funcionarios" exact component={Funcionarios} />
  </Switch>
);

export default Routes;
