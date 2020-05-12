import React from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from './pages/Home/Home.js';
import Splash from './pages/Splash/Splash.js';
import './App.css';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/splash" component={Splash} />
          <Route path="/home" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
