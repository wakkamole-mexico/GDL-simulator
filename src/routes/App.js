import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Resultado from '../containers/Resultado';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Home} />
    <Route exact path='/resultado' component={Resultado} />
  </BrowserRouter>
);

export default App;
