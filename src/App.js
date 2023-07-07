import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Otp from './components/otp';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/otp" exact component={Otp} />
        <Route path="/" exact component={Login} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>

    </div>
  );
}

export default App;
