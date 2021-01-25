import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import GunNav from '../Stats/GunNavBar';
import CategoryNav from '../Stats/CategoryNavBar';
import GunStats from '../Stats/GunStats';
import GameModeStats from '../Stats/GameModeStats';
import Overview from '../Stats/Overview'
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER, LETHAL } from '../images.js'
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
    allApiData,
    setAllApiData,
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

  // Checking for what GUN tab is selected on the stats page
  const gunTabSelected = (indexValue) => {
    const categories = ["weapon_assault_rifle", "weapon_marksman", "weapon_sniper", "weapon_smg","lethals", "weapon_lmg", "weapon_launcher", "weapon_pistol", "weapon_shotgun", "supers", "weapon_other", "weapon_melee"];

    const gunCat = [
      AR,
      MRKSMN,
      SNPR,
      SMG,
      LETHAL,
      LMG,
      LAUNCHER,
      PISTOL,
      SG,
    ]

    // shown = setting the cat state to an object of the category
    setAllApiData(prev => ({
      ...prev,
      gunNavSelected: indexValue,
      selectedGunTab: categories[indexValue],
      shown: allApiData.weapons[categories[indexValue]],
      category: gunCat[indexValue]
    }))
  };


  const categorySelected = (indexValue) => {

    // This function sets the allApiData for the specific shown allApiData and category if we dont set allApiDatas here the page crashes when you change from a game mode to guns... because the guns component cant read the game modes object and vice versa

    const categories = ["overview", "guns", "game_modes"];

    if (categories[indexValue] === "guns") {
      setAllApiData(prev => ({
        ...prev,
        shown: allApiData.weapons.weapon_assault_rifle,
        category: AR
      }))
    } else if (categories[indexValue] === "game_modes") {
      setAllApiData(prev => ({
        ...prev,
        shown: allApiData.gameModes,
      }))
    } else if (categories[indexValue] === "overview") {
      setAllApiData(prev => ({
        ...prev,
        shown: allApiData.playerInfo
      }))
    }

    // shown = setting the cat allApiData to an object of the category
    setAllApiData(prev => ({
      ...prev,
      shownCat: categories[indexValue]
    }))
  };

  const navBarsToShow = () => {

    // This is setting to return what SECONDARY navBar is shown...
    //if the gun category is selected then we show all the sub categories of guns.. IE AR, SMGS, SHOTTIES etc... OR game modes.. depending on what was clicked..

    if (allApiData.shownCat === "guns") {
      return (
        <>
          <GunNav
            onSelect={gunTabSelected}
          />
          <div className="card-row" style={{backgroundColor: '#191D24', minHeight: '100vh', height: '100%'}}>

            <GunStats
              shown={allApiData.shown}
              gunImgs={allApiData.category}
              gunTab={allApiData.selectedGunTab}
              weapons={allApiData.weapons}
              gunNavSelected={allApiData.gunNavSelected}
            />

          </div>
        </>
      )
    } else if (allApiData.shownCat === "game_modes") {

      return (
        <>
          <div style={{backgroundColor: '#191D24', minHeight: '100vh', height: '100%'}}>
            <GameModeStats
              shown={allApiData.shown}
              category={allApiData.gameModeCat}
            />
          </div>
        </>
      )
    } else if (allApiData.shownCat === "overview") {
      return (
        <>
          <Overview
            shown={allApiData.shown}
          />
        </>
      )
    }
  }





  return (
    <div>
      <CategoryNav
        onSelect={categorySelected}
      />
      {navBarsToShow()}
    </div >
  )
}






