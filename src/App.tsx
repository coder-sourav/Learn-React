import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import { Route,Switch } from 'react-router-dom';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ParentClass from './ParentClass';

function App() {
  return (
  <Switch>
    <Route exact path={'/lol'} component={About} ></Route>
    <Route exact path={'/a/:name'} component={ComponentB} ></Route>
    <Route exact path={'/c'} component={ComponentC} ></Route>
    <Route path={'/classBased'} component={ParentClass} ></Route>
  </Switch>
  );
}

export default App;
