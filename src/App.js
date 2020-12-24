import React, { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './RouterPages/Home.js';
import Guns from './RouterPages/Guns.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './RouterPages/Roulette.js';

export default function App() {
  const [state, setState] = useState({
    guns: ["iw8_ar_tango21"],
    kills: [],
    deaths: [],
    kdRatio: [],
    hits: [],
    shots: [],
    value: [],
    gunName: [],
  })

  useEffect(() => {
    axios
      .get('http://localhost:8080/g/moho')
      .then(res => {
        // console.log(res.data.weapon_assault_rifle)
        const guns = state.value
        const deaths = res.data.weapon_assault_rifle[guns].properties.deaths
        const hits = res.data.weapon_assault_rifle[guns].properties.hits
        const kills = res.data.weapon_assault_rifle[guns].properties.kills
        const kdRatio = res.data.weapon_assault_rifle[guns].properties.kdRatio
        const shots = res.data.weapon_assault_rifle[guns].properties.shots

        setState(prev => ({
          ...prev,
          guns: guns,
          kills: kills,
          deaths: deaths,
          kdRatio: kdRatio,
          hits: hits,
          shots: shots
        }))
      })
      .catch(error => {
        console.log(error);
      })
  }, [state.value])
  // state.value // This is what gets updated for the effect!!

  return (
    <div>
      <PrimarySearchAppBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/guns' component={Guns} />
        <Route path='/roulette' component={Roulette} />
        <Route path='/myProf' component={Profile} />
      </Switch>
    </div>
  );
}



/* <DropDown
selected={event => setState(prev => ({
  ...prev,
  value: event.target.value,
  gunName: event.target.options[event.target.options.selectedIndex].innerText
}))}
/> */