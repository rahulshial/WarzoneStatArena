import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../overlay.css';
import DropDownCategory from "../DropDownCategory";
import DropDownStats from "../DropDownStats";
import CheckboxCategories from '../Overlay/CheckboxCategories';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Overlay() {
  const [state, setState] = useState({
    weeklyData: {},
    gameModes: {},
    gunData: {},
    lifetimeData: {},
  })


  useEffect(() => {
    // let nickname = props.name.replace("#", "%23")
    // nickname will === username
    axios.get(`http://localhost:3030/stats/moho`)
      .then(res => {
        console.log(res.data[0])
        setState(prev => ({
          ...prev,
          weeklyData: res.data[0],
          gameModes: res.data[1],
          gunData: res.data[2],
          lifetimeData: res.data[3],
        }))
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  const functun = () => {
    if (Object.keys(state.weeklyData).length !== 0) {

      return (
        <Router>
          <div>
            <h2>Choose Overlay To Customize</h2>
            <ul>
              <h1>
                <Link to="/Large">Large Overlay</Link>
              </h1>

              <h1>
                <Link to="/Small">Small Overlay</Link>
              </h1>
            </ul>
            <Switch>
              <Route path="/:id" children={<Child weeklyData={state.weeklyData} lifetimeData={state.lifetimeData} gunData={state.gunData} />} />
            </Switch>
          </div>
        </Router>
      )
    }
  }
  return (
    <>
      {functun()}
    </>
  )
}

function Child(props) {
  let { id } = useParams();
  const { weeklyData, lifetimeData, gunData } = props
  const [state, setState] = useState({
    tmpStat1: ["Example Stat", 33],
    tmpStat2: ["Example Stat", 33],
    tmpStat3: ["Example Stat", 33],
    tmpStat4: ["Example Stat", 33],
  })

  // WEEKLY DATA VARIABLES!! Since we only want to show some!!! ########################
  // #####################################################################################
  const preFix = weeklyData.weeklyData.all.properties
  const avgLifeTime = weeklyData.weeklyData.all.properties.avgLifeTime.toFixed(2);
  const damageDone = weeklyData.weeklyData.all.properties.damageDone;
  const damageTaken = weeklyData.weeklyData.all.properties.damageTaken;
  const gulagKills = weeklyData.weeklyData.all.properties.gulagKills;
  const gulagDeaths = weeklyData.weeklyData.all.properties.gulagDeaths;
  const executions = weeklyData.weeklyData.all.properties.executions;
  const timePlayed = weeklyData.weeklyData.all.properties.timePlayed;
  const headshots = weeklyData.weeklyData.all.properties.headshots;
  const assists = weeklyData.weeklyData.all.properties.assists;
  const deaths = weeklyData.weeklyData.all.properties.deaths;
  const distanceTraveled = weeklyData.weeklyData.all.properties.distanceTraveled.toFixed(2);
  const headshotPercentage = weeklyData.weeklyData.all.properties.headshotPercentage;
  const kdRatio = weeklyData.weeklyData.all.properties.kdRatio;
  const killsPerGame = weeklyData.weeklyData.all.properties.killsPerGame;
  const matchesPlayed = weeklyData.weeklyData.all.properties.matchesPlayed;
  const buyStationPurchase = weeklyData.weeklyData.all.properties.objectiveBrKioskBuy;
  const missionsPickedUp = weeklyData.weeklyData.all.properties.objectiveBrMissionPickupTablet;
  const vehiclesDestroyed = weeklyData.weeklyData.all.properties.objectiveDestroyedVehicleMedium;
  const knockedPlayersKilled = weeklyData.weeklyData.all.properties.objectiveLastStandKill;
  const revives = weeklyData.weeklyData.all.properties.objectiveReviver;
  const teamsWiped = weeklyData.weeklyData.all.properties.objectiveTeamWiped;
  const totalScore = weeklyData.weeklyData.all.properties.score;
  const scorePerMinute = weeklyData.weeklyData.all.properties.scorePerMinute;
  const wallBangs = weeklyData.weeklyData.all.properties.wallBangs;
  console.log(avgLifeTime);
  // #####################################################################################
  // #####################################################################################
  // #####################################################################################


  const selectedStat = (value, id, checked ) => {
    if (checked) {
      console.log(preFix[value]);
      console.log(value);
      if (state.tmpStat1[0] === "Example Stat") {
        
        setState(prev => ({
          ...prev,
          tmpStat1: [value,preFix[value]]
        }))
        return
      }
      if (state.tmpStat2[0] === "Example Stat") {
        
        setState(prev => ({
          ...prev,
          tmpStat2: [value,id]
        }))
        return
      }
      if (state.tmpStat3[0] === "Example Stat") {
        
        setState(prev => ({
          ...prev,
          tmpStat3: [value,id]
        }))
        return
      }
      if (state.tmpStat4[0] === "Example Stat") {
        
        setState(prev => ({
          ...prev,
          tmpStat4: [value,id]
        }))
        return
      }

    } else {
      if (state.tmpStat1[0] === value) {
        
        setState(prev => ({
          ...prev,
          tmpStat1: ["Example Stat", 33]
        }))
        return
      }
      if (state.tmpStat2[0] === value) {
        
        setState(prev => ({
          ...prev,
          tmpStat2: ["Example Stat", 33]
        }))
        return
      }
      if (state.tmpStat3[0] === value) {
        
        setState(prev => ({
          ...prev,
          tmpStat3: ["Example Stat", 33]
        }))
        return
      }
      if (state.tmpStat4[0] === value) {
        
        setState(prev => ({
          ...prev,
          tmpStat4: ["Example Stat", 33]
        }))
        return
      }
    }
  };


  if (id === "Large") {
    return (
      <>
        <CheckboxCategories />

        <div className="full-bar"></div>
        <div className="stats">
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat1[0]}</div>
            <div className="overlay-stat1">{state.tmpStat1[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat2[0]}</div>
            <div className="overlay-stat1">{state.tmpStat2[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat3[0]}</div>
            <div className="overlay-stat1">{state.tmpStat3[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat4[0]}</div>
            <div className="overlay-stat1">{state.tmpStat4[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Gulag Deaths</div>
            <div className="overlay-stat1">{gulagDeaths}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">executions</div>
            <div className="overlay-stat1">{executions}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Time Played</div>
            <div className="overlay-stat1">{timePlayed}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">headshots</div>
            <div className="overlay-stat1">{headshots}</div>
          </div>
          <button onClick={(e) => { console.log(id) }}>Select This Overlay</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <CheckboxCategories />
        <div className="medium-bar"></div>
        <div className="stats-medium-bar">
        <div className="stats1">
            <div className="overlay-title1">{state.tmpStat1[0]}</div>
            <div className="overlay-stat1">{state.tmpStat1[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat2[0]}</div>
            <div className="overlay-stat1">{state.tmpStat2[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat3[0]}</div>
            <div className="overlay-stat1">{state.tmpStat3[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{state.tmpStat4[0]}</div>
            <div className="overlay-stat1">{state.tmpStat4[1]}</div>
          </div>
          <button onClick={(e) => { console.log(id) }}>Select This Overlay</button>
        </div>
      </>
    );
  }
}