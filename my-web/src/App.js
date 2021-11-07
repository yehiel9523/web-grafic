import './App.css';
import Main from './Main';
import Login from './Login';

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ImagesProvider from './ImagesContects';


function App() {
  return (
    <Router>
      <ImagesProvider>
        <Route exact path="/">
          <Main />
        </Route>
      </ImagesProvider>
      <Route path='/login'>
        <Login />
      </Route>
    </Router>
  )
}

export default App;
