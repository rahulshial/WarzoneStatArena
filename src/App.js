import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './stats.css'
import Home from './RouterPages/Home.js';
import Stats from './RouterPages/Stats.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './roulette/Roulette.js';




const globalState = {
  text: "foo",
};

const globalStateContext = React.createContext(globalState);


export default function App(props) {
  return (
    <globalStateContext.Provider value={globalState}>
    <>
     
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/stats' component={Stats} />
        <Route path='/roulette' component={Roulette} />
        <Route path='/myProf' component={Profile} />
      </Switch>
    </>
    </globalStateContext.Provider>
  );
}

