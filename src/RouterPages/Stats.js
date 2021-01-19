import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import GunNav from '../Stats/GunNavBar';
import CategoryNav from '../Stats/CategoryNavBar';
import GunStats from '../Stats/GunStats';
import GameModeStats from '../Stats/GameModeStats';
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER } from '../images.js'
import useApplicationData from "../hooks/useApplicationData";

export default function Guns(props) {
  // const [state, setState] = useState({
  //   gameModes: [],
  //   shown: [],
  //   shownCat: [],
  //   gameModeCat: [],
  //   category: [],
  //   weapons: [],
  //   gunNavSelected: [],
  //   selectedGunTab: 'weapon_assault_rifle'
  // })

  const {
    weapons1,
    setWeapon
  } = useApplicationData();

  // useEffect(() => {
  //   let nickname = props.name.replace("#", "%23")
  //   // nickname will === username
  //   // Promise.all([
  //   //   axios.get(`http://localhost:3030/stats/moho`),
  //   //   axios.get(`http://localhost:3030/stats/allstats/moho`)
  //   // ])
  //   axios.get(`http://localhost:3030/stats/moho`)
  //     .then(res => {
  //       const weapons = res.data[2].guns;
  //       const gameModes = res.data[1].gameModes;
  //       console.log(gameModes);
  //       setState(prev => ({
  //         ...prev,
  //         gameModes,
  //         weapons,
  //         category: AR,
  //       }))

  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [])

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
    setWeapon(prev => ({
      ...prev,
      gunNavSelected: indexValue,
      selectedGunTab: categories[indexValue],
      shown: weapons1.weapons[categories[indexValue]],
      category: gunCat[indexValue]
    }))
  };


  const categorySelected = (indexValue) => {

    // This function sets the weapons1 for the specific shown weapons1 and category if we dont set weapons1s here the page crashes when you change from a game mode to guns... because the guns component cant read the game modes object and vice versa

    const categories = ["overview", "guns", "game_modes", "misc_stats"];

    if (categories[indexValue] === "guns") {
      setWeapon(prev => ({
        ...prev,
        shown: weapons1.weapons.weapon_assault_rifle,
        category: AR
      }))
    } else if (categories[indexValue] === "game_modes") {
      setWeapon(prev => ({
        ...prev,
        shown: weapons1.gameModes,
        // gameModeCat: 'gun'
      }))
    }

    // shown = setting the cat weapons1 to an object of the category
    setWeapon(prev => ({
      ...prev,
      shownCat: categories[indexValue]
    }))
  };

  const navBarsToShow = () => {

    // This is setting to return what SECONDARY navBar is shown...
    //if the gun category is selected then we show all the sub categories of guns.. IE AR, SMGS, SHOTTIES etc... OR game modes.. depending on what was clicked..

    if (weapons1.shownCat === "guns") {
      return (
        <>
          <GunNav
            onSelect={gunTabSelected}
          />
          <div className="card-row">

            <GunStats
              shown={weapons1.shown}
              gunImgs={weapons1.category}
              gunTab={weapons1.selectedGunTab}
              weapons={weapons1.weapons}
              gunNavSelected={weapons1.gunNavSelected}
            />

          </div>
        </>
      )
    } else if (weapons1.shownCat === "game_modes") {

      return (
        <>
          <table>
            <GameModeStats
              shown={weapons1.shown}
              category={weapons1.gameModeCat}
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






