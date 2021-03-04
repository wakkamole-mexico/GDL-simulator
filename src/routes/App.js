import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Resultado from '../containers/Resultado';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Resultadov2 from '../containers/ResultadoV2';
import Resultadov3 from '../containers/ResultadoV3';
import Resultadov4 from '../containers/ResultadoV4';
import Resultadov5 from '../containers/ResultadoV5';
import Resultadov6 from '../containers/ResultadoV6';
import Resultadov7 from '../containers/ResultadoV7';
import Resultadov8 from '../containers/ResultadoV8';
import Resultadov9 from '../containers/ResultadoV9';
import Resultadov10 from '../containers/ResultadoV10';
import Resultadov11 from '../containers/ResultadoV11';
import Resultadov12 from '../containers/ResultadoV12';
import Resultadov13 from '../containers/ResultadoV13';
import Resultadov14 from '../containers/ResultadoV14';
import Resultadov15 from '../containers/ResultadoV15';
import Resultadov16 from '../containers/ResultadoV16';
import Resultadov17 from '../containers/ResultadoV17';
import Resultadov18 from '../containers/ResultadoV18';
import Resultadov19 from '../containers/ResultadoV19';
import Resultadov20 from '../containers/ResultadoV20';
import Resultadov21 from '../containers/ResultadoV21';
import Resultadov22 from '../containers/ResultadoV22';
import Resultadov23 from '../containers/ResultadoV23';
import Resultadov24 from '../containers/ResultadoV24';
import Resultadov25 from '../containers/ResultadoV25';
import Resultadov26 from '../containers/ResultadoV26';
import Resultadov27 from '../containers/ResultadoV27';
import Resultadov28 from '../containers/ResultadoV28';
import Resultadov29 from '../containers/ResultadoV29';
import Resultadov30 from '../containers/ResultadoV30';
import Resultadov31 from '../containers/ResultadoV31';
import Resultadov32 from '../containers/ResultadoV32';
import Resultadov33 from '../containers/ResultadoV33';
import Resultadov34 from '../containers/ResultadoV34';
import Resultadov35 from '../containers/ResultadoV35';
import Resultadov36 from '../containers/ResultadoV36';
import Resultadov37 from '../containers/ResultadoV37';
import Resultadov38 from '../containers/ResultadoV38';
import Resultadov39 from '../containers/ResultadoV39';
import Resultadov40 from '../containers/ResultadoV40';
import Resultadov41 from '../containers/ResultadoV41';
import Resultadov42 from '../containers/ResultadoV42';
import Resultadov43 from '../containers/ResultadoV43';
import Resultadov44 from '../containers/ResultadoV44';
import Resultadov45 from '../containers/ResultadoV45';
import Resultadov46 from '../containers/ResultadoV46';
import Resultadov47 from '../containers/ResultadoV47';
import Resultadov48 from '../containers/ResultadoV48';
import Resultadov49 from '../containers/ResultadoV49';
import Resultadov50 from '../containers/ResultadoV50';
import Resultadov51 from '../containers/ResultadoV51';
import Resultadov52 from '../containers/ResultadoV52';
import Resultadov53 from '../containers/ResultadoV53';
import Resultadov54 from '../containers/ResultadoV54';
import Resultadov55 from '../containers/ResultadoV55';
import Resultadov56 from '../containers/ResultadoV56';
import Resultadov57 from '../containers/ResultadoV57';
import Resultadov58 from '../containers/ResultadoV58';
import Resultadov59 from '../containers/ResultadoV59';
import Resultadov60 from '../containers/ResultadoV60';
import Resultadov61 from '../containers/ResultadoV61';
import Resultadov62 from '../containers/ResultadoV62';
import ResultadoV63 from '../containers/ResultadoV63';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <HashRouter>
          <Route exact path='/' component={Home} />
          <Route exact path='/resultado' component={Resultado} />
          <Route exact path='/resultadov2' component={Resultadov2} />
          <Route exact path='/resultadov3' component={Resultadov3} />
          <Route exact path='/resultadov4' component={Resultadov4} />
          <Route exact path='/resultadov5' component={Resultadov5} />
          <Route exact path='/resultadov6' component={Resultadov6} />
          <Route exact path='/resultadov7' component={Resultadov7} />
          <Route exact path='/resultadov8' component={Resultadov8} />
          <Route exact path='/resultadov9' component={Resultadov9} />
          <Route exact path='/resultadov10' component={Resultadov10} />
          <Route exact path='/resultadov11' component={Resultadov11} />
        </HashRouter>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
