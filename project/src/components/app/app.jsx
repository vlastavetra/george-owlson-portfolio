import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import Divercity from '../pages/Divercity';
import CoffeeDip from '../pages/CoffeeDip';
import PageNotFound from '../pages/PageNotFound';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/project-divercity" exact>
          <Divercity />
        </Route>
        <Route path="/project-coffee-dip" exact>
          <CoffeeDip />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
