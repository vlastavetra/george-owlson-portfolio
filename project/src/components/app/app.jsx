import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import Gem from '../pages/Gem';
import Divercity from '../pages/Divercity';
import CoffeeDip from '../pages/CoffeeDip';
import Alcon from '../pages/Alcon';
import Graphics from '../pages/Graphics';
import PageNotFound from '../pages/PageNotFound';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/gem" exact>
          <Gem />
        </Route>
        <Route path="/divercity" exact>
          <Divercity />
        </Route>
        <Route path="/coffee-dip" exact>
          <CoffeeDip />
        </Route>
        <Route path="/alcon" exact>
          <Alcon />
        </Route>
        <Route path="/graphics" exact>
          <Graphics />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
