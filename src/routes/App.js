import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Resultado from '../containers/Resultado';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/resultado' component={Resultado} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>

);

export default App;
