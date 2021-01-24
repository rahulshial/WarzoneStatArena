import React, { useState } from 'react'
import axios from 'axios'
import '../stats.css'
import StatCard from './StatCard.js'


export default function GunStats({ shown, gunImgs, gunTab, weapons, gunNavSelected }) {

  const [gunCatState, setGunCatState] = useState('weapon_assault_rifle');
  const topRow = []
  const categories = ["weapon_assault_rifle", "weapon_marksman", "weapon_sniper", "weapon_smg", "tacticals", "lethals", "weapon_lmg", "weapon_launcher", "weapon_pistol", "weapon_shotgun", "supers", "weapon_other", "weapon_melee"];


  const changeGunCat = () => {
    console.log(gunTab);
  }

  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  }

  const onButtonClick = (gun, img, cat) => {
    
    const gunObj = {
      cat: gunTab,
      gun,
      image: img
    }

    axios
      .post("http://localhost:3030/trackedstats/addnew", gunObj)
      .then(res => {
        console.log("hello");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return topRow.map((gun, i) => {

    const titles = [];
    const stats = [];

    Object.keys(gun).map((gunStat, i) => {

     // FOR GRABBING PROPPER GUN NAMES PERHAPS A HELPER FILE WITH AN OBJECT 
    //  KEY = IW8_AR*** 
    //  VALUE = PROPPER GUN NAME

      if (gunStat === "kdRatio" || gunStat === "accuracy") {
        titles.push(<td><h5>{gunStat}</h5></td>)
        stats.push(<td><h5>{gun[gunStat].toFixed(2)}</h5></td>)
      } else {
        titles.push(<td><h5>{gunStat}</h5></td>)
        stats.push(<td><h5>{gun[gunStat]}</h5></td>)
      }
    })
    return (
      <>
        <StatCard
          onAdd={onButtonClick}
          gunName={Object.keys(shown)[i]}
          image={gunImgs[Object.keys(shown)[i]]}
          topRow={titles}
          statsRow={stats}
          // Changed cat to just check the category! It does nothing!!
          cat={changeGunCat}
        />
      </>
    )
  })

}


// categories[gunNavSelected]