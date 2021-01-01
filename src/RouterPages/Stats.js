import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import GunNav from '../Stats/GunNavBar';
import GameModeNav from '../Stats/GameModeNavBar';
import CategoryNav from '../CategoryNavBar';
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
    const categories = ["gun", "dom", "war", "hq", "hc_dom", "koth", "arena", "br", "sd", "cyber", "arm"];
    // console.log(categories[indexValue]);

    setState(prev => ({
      ...prev,
      shown: state.gameModes.data[categories[indexValue]],
      gameModeCat: categories[indexValue]
    }))
  }

  const categorySelected = (indexValue) => {
    const categories = ["overview", "guns", "game_modes", "misc_stats"];
    console.log();

    if (categories[indexValue] === "guns") {
      setState(prev => ({
        ...prev,
        shown: state.assaultRifles,
        category: AR
      }))
    } else if (categories[indexValue] === "game_modes") {
      setState(prev => ({
        ...prev,
        shown: state.gameModes.data.gun,
        gameModeCat: 'gun'
      }))
    }

    // shown = setting the cat state to an object of the category
    setState(prev => ({
      ...prev,
      shownCat: categories[indexValue]
    }))
  };

  const navBarsToShow = () => {
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
          <GameModeNav
            onSelect={gameModeSelected}
          />
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






