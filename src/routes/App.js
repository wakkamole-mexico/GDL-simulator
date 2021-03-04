import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Resultado from '../containers/Resultado';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Resultadov2 from '../containers/ResultadoV2'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/resultado' component={Resultado} />
          <Route exact path='/resultadov2' component={Resultadov2} />
        </HashRouter>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
