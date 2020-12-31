import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './stats.css';
import Home from './RouterPages/Home.js';
import Stats from './RouterPages/Stats.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './roulette/Roulette.js';
import useApplicationData from "./hooks/useApplicationData";

const globalState = {
  text: "foo",
};

const globalStateContext = React.createContext(globalState);

export default function App(props) {

  const {
    state,
    setState,
    nickname,
  } = useApplicationData();
  function setName(event) {
    
    setState(prev => ({
      ...prev,
      name: event.target.value
    }))
  }

  function setPlatform(platform) {
    setState(prev => ({
      ...prev,
      platform
    }))
  }

  return (
    <globalStateContext.Provider value={globalState}>
    <>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' render={(props) => <Home name={state.name} nickname={nickname} setName={setName} setPlatform={setPlatform} platfrom={state.platfrom}/>} />
        <Route path='/stats' render={(props) => <Stats name={state.name} />} />
        <Route path='/roulette' component={Roulette} />
        <Route path='/myProf' component={Profile} />
      </Switch>
    </>
    </globalStateContext.Provider>
  );
}

