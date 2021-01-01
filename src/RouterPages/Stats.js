import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import GunNav from '../Stats/GunNavBar';
import GameModeNav from '../Stats/GameModeNavBar';
import CategoryNav from '../Stats/CategoryNavBar';
import GunStats from '../Stats/GunStats';
import GameModeStats from '../Stats/GameModeStats';
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER } from '../images.js'
import BasicTextFields from "../textField";
import useApplicationData from "../hooks/useApplicationData";

export default function Guns(props) {
  const [state, setState] = useState({
    gameModes: [],
    assaultRifles: [],
    shotGuns: [],
    marksman: [],
    snipers: [],
    tacticals: [],
    lethals: [],
    lmg: [],
    launcher: [],
    supers: [],
    pistol: [],
    other: [],
    smg: [],
    melee: [],
    shown: [],
    shownCat: [],
    gameModeCat: [],
    category: [],
  })


  useEffect(() => {
    let nickname = props.name.replace("#", "%23")
    // nickname will === username
    Promise.all([
      axios.get(`http://localhost:3030/stats/moho`),
      axios.get(`http://localhost:3030/stats/allstats/moho`)
    ])
      .then(res => {
        const assaultRifles = res[0].data.weapon_assault_rifle
        const shotGuns = res[0].data.weapon_shotgun
        const marksman = res[0].data.weapon_marksman
        const snipers = res[0].data.weapon_sniper
        const tacticals = res[0].data.tacticals
        const lethals = res[0].data.lethals
        const lmg = res[0].data.weapon_lmg
        const launcher = res[0].data.weapon_launcher
        const supers = res[0].data.supers
        const pistol = res[0].data.weapon_pistol
        const other = res[0].data.weapon_other
        const smg = res[0].data.weapon_smg
        const melee = res[0].data.weapon_melee

        const gameModes = res[1];

        setState(prev => ({
          ...prev,
          gameModes: gameModes,
          assaultRifles: assaultRifles,
          shotGuns: shotGuns,
          marksman: marksman,
          snipers: snipers,
          tacticals: tacticals,
          lethals: lethals,
          lmg: lmg,
          launcher: launcher,
          supers: supers,
          pistol: pistol,
          other: other,
          smg: smg,
          melee: melee,
          category: AR,
        }))

      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  // Checking for what tab is selected on the stats page
  const gunTabSelected = (indexValue) => {
    const categories = ["assaultRifles", "marksman", "snipers", "smg", "tacticals", "lethals", "lmg", "launcher", "pistol", "shotGuns", "supers", "other", "melee"];
    const gunCat = [
      AR,
      MRKSMN,
      SNPR,
      SMG,
      AR,
      AR,
      LMG,
      LAUNCHER,
      PISTOL,
      SG,
    ]
    // shown = setting the cat state to an object of the category
    setState(prev => ({
      ...prev,
      shown: state[categories[indexValue]],
      category: gunCat[indexValue]
    }))
  };

  const gameModeSelected = (indexValue) => {

  // I want to change this so we only show multiplayer OR warzone...
  // IF !WARZONE THEN SHOW ALL MULTIPLAYER?
  // There is not too many warzone stats... so maybe we should just show ALL game modes when its selected
    const categories = ["gun", "dom", "war", "hq", "hc_dom", "koth", "arena", "br", "sd", "cyber", "arm"];

    console.log("selected", categories[indexValue]);
    setState(prev => ({
      ...prev,
      shown: state.gameModes.data[categories[indexValue]],
      gameModeCat: categories[indexValue]
    }))
  }



  const categorySelected = (indexValue) => {

    // This function sets the state for the specific shown state and category if we dont set states here the page crashes when you change from a game mode to guns... because the guns component cant read the game modes object and vice versa

    const categories = ["overview", "guns", "game_modes", "misc_stats"];

    if (categories[indexValue] === "guns") {
      setState(prev => ({
        ...prev,
        shown: state.assaultRifles,
        category: AR
      }))
    } else if (categories[indexValue] === "game_modes") {
      setState(prev => ({
        ...prev,
        shown: state.gameModes.data,
        // gameModeCat: 'gun'
      }))
    }

    // shown = setting the cat state to an object of the category
    setState(prev => ({
      ...prev,
      shownCat: categories[indexValue]
    }))
  };


  const navBarsToShow = () => {

    // This is setting to return what SECONDARY navBar is shown...
    //if the gun category is selected then we show all the sub categories of guns.. IE AR, SMGS, SHOTTIES etc... OR game modes.. depending on what was clicked..

    if (state.shownCat === "guns") {
      return (
        <>
          <GunNav
            onSelect={gunTabSelected}
          />
          <div className="card-row">
            <GunStats
              shown={state.shown}
              gunImgs={state.category}
            />
          </div>
        </>
      )
    } else if (state.shownCat === "game_modes") {

      return (
        <>
          <div>
            <GameModeStats
              shown={state.shown}
              category={state.gameModeCat}
            />
          </div>
        </>
      )
    }
  }





  return (
    <div>
      <h1>STATS</h1>
      <CategoryNav
        onSelect={categorySelected}
      />
      {navBarsToShow()}
    </div >
  )
}






