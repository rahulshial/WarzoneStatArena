import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './stats.css';
import Home from './RouterPages/Home.js';
import Guns from './RouterPages/Guns.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './roulette/Roulette.js';
import useApplicationData from "./hooks/useApplicationData";


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
    <>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' render={(props) => <Home name={state.name} nickname={nickname} setName={setName} setPlatform={setPlatform} platfrom={state.platfrom}/>} />
        <Route path='/guns' render={(props) => <Guns name={state.name} />} />
        <Route path='/roulette' component={Roulette} />
        <Route path='/myProf' component={Profile} />
      </Switch>
    </>
  );
}

