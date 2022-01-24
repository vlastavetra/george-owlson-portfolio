import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from '../page/Main';
import '../../styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
