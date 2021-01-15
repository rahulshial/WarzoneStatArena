import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import GunNav from '../Stats/GunNavBar';
import CategoryNav from '../Stats/CategoryNavBar';
import GunStats from '../Stats/GunStats';
import GameModeStats from '../Stats/GameModeStats';
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER } from '../images.js'

export default function Guns(props) {
  const [state, setState] = useState({
    gameModes: [],
    shown: [],
    shownCat: [],
    gameModeCat: [],
    category: [],
    weapons:[],
    gunNavSelected: [],
    selectedGunTab: 'weapon_assault_rifle'
  })
  console.log(state.selectedGunTab, "*************");
  useEffect(() => {
    let nickname = props.name.replace("#", "%23")
    // nickname will === username
    Promise.all([
      axios.get(`http://localhost:3030/stats/moho`),
      axios.get(`http://localhost:3030/stats/allstats/moho`)
    ])
      .then(res => {
        const weapons = res[0].data;
        const gameModes = res[1];

        setState(prev => ({
          ...prev,
          gameModes,
          weapons,
          category: AR,
        }))

      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  // Checking for what tab is selected on the stats page
  const gunTabSelected = (indexValue) => {
    const categories = ["weapon_assault_rifle", "weapon_marksman", "weapon_sniper", "weapon_smg", "tacticals", "lethals", "weapon_lmg", "weapon_launcher", "weapon_pistol", "weapon_shotgun", "supers", "weapon_other", "weapon_melee"];

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
      gunNavSelected: indexValue,
      selectedGunTab: categories[indexValue],
      shown: state.weapons[categories[indexValue]],
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
        shown: state.weapons.weapon_assault_rifle,
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
              gunTab={state.selectedGunTab}
              weapons={state.weapons}
              gunNavSelected={state.gunNavSelected}
            />
            
          </div>
        </>
      )
    } else if (state.shownCat === "game_modes") {

      return (
        <>
          <table>
            <GameModeStats
              shown={state.shown}
              category={state.gameModeCat}
            />
          </table>
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






