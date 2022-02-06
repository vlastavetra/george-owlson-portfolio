import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../pages/Main';
import Project from '../pages/Project';
import PageNotFound from '../pages/PageNotFound';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/project-:id" exact>
          <Project />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
