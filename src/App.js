import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './RouterPages/Home.js';
import Guns from './RouterPages/Guns.js';
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './roulette/Roulette.js';


export default function App(props) {
  return (
    <div>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/guns' component={Guns} />
        <Route exact path='/roulette' component={Roulette} />

      </Switch>

    </div>
    
  );
}



