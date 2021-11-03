// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Login from './Login';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/">
        <Main />

      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Router>
  )
}

export default App;
