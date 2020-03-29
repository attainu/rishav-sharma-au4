import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Table from './components/Table.js';
import Orders from './components/Orders';
import Waiters from './components/Waiters';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
        <Redirect to="/table" />
        </Route>
        <Route path="/table" component={Table} />
        <Route paths="/waiters" component={Waiters}/>
        <Route path="/orders" component={Orders}/>
        </Switch>
        </Router>
        
      
  );
}

export default App;
