import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/app-trybe-wallet" component={ Login } />
      <Route path="/app-trybe-wallet/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
