import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './stats.css'
import Home from './RouterPages/Home.js';
import Guns from './RouterPages/Guns.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './RouterPages/Roulette.js';

export default function App() {

  return (
    <>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/guns' component={Guns} />
        <Route path='/roulette' component={Roulette} />
        <Route path='/myProf' component={Profile} />
      </Switch>
    </>
  );
}
