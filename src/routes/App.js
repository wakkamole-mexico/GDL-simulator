import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Resultado from '../containers/Resultado';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/resultado' component={Resultado} />
          <Route component={NotFound} />
        </HashRouter>
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
