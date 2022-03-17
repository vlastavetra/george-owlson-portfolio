import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import Divercity from '../pages/Divercity';
import CoffeeDip from '../pages/CoffeeDip';
import Alcone from '../pages/Alcone';
import PageNotFound from '../pages/PageNotFound';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/divercity" exact>
          <Divercity />
        </Route>
        <Route path="/coffee-dip" exact>
          <CoffeeDip />
        </Route>
        <Route path="/alcone" exact>
          <Alcone />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
