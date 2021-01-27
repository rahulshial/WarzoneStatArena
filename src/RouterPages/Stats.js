/** The stats page shows the logged users or the selected gamers statistics in terms of his Overview
 * Weapons and Gamemodes.
 * Subordinate components of Stats are CategoryNavBar to selecte which stat category to be viewed
 * GunNavBar to select the weapon type to view
 * Overview to show weekly and lifetime stats
  */
/** React Imports */
import React from "react";
import {useHistory} from 'react-router-dom';

/** Local Imports */
import '../stats.css';
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER, LETHAL } from '../images.js'
import useApplicationData from "../hooks/useApplicationData";
import GunNav from '../Stats/GunNavBar';
import CategoryNav from '../Stats/CategoryNavBar';
import GunStats from '../Stats/GunStats';
import GameModeStats from '../Stats/GameModeStats';
import Overview from '../Stats/Overview';

export default function Guns(props) {
  const history = useHistory();

  const {
    allApiData,
    setAllApiData,
  } = useApplicationData();

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
    ];

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
      }));
    } else if (categories[indexValue] === "game_modes") {
      setAllApiData(prev => ({
        ...prev,
        shown: allApiData.gameModes,
      }));
    } else if (categories[indexValue] === "overview") {
      setAllApiData(prev => ({
        ...prev,
        shown: allApiData.playerInfo
      }));
    }

    // shown = setting the cat allApiData to an object of the category
    setAllApiData(prev => ({
      ...prev,
      shownCat: categories[indexValue]
    }));
  };

    /**This is setting to return what SECONDARY navBar is shown. if the gun category is selected then we show all the sub categories of guns.. IE AR, SMGS, SHOTTIES etc... OR game modes.. depending on what was clicked..
     * */

  const navBarsToShow = () => {
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
            />
          </div>
        </>
      );
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
      );
    } else if (allApiData.shownCat === "overview") {
      return (
        <>
         <div style={{backgroundColor: '#191D24', minHeight: '100vh', height: '100%'}}>
          <Overview
            shown={allApiData.shown}
          />
          </div>
        </>
      );
    } else if (!allApiData.shown) {
      history.push("/")
    }
  }
  return (
    <div>
      <CategoryNav
        onSelect={categorySelected}
      />
      {navBarsToShow()}
    </div >
  );
};





