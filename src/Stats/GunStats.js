import React from 'react'
import axios from 'axios'
import '../stats.css'
import StatCard from './StatCard.js'


export default function GunStats({ shown, gunImgs, gunTab, weapons, gunNavSelected }) {
  const topRow = []

  const categories = ["weapon_assault_rifle", "weapon_marksman", "weapon_sniper", "weapon_smg", "tacticals", "lethals", "weapon_lmg", "weapon_launcher", "weapon_pistol", "weapon_shotgun", "supers", "weapon_other", "weapon_melee"];
  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  }

  const onButtonClick = (gun, img, cat) => {
    const gunObj = {
      cat,
      gun,
      image: img
    }

    axios
      .post("http://localhost:3030/trackedstats/addnew", gunObj)
      .then(res => {
        
      })
      .catch(err => {
        console.log(err);
      })
  }



  return topRow.map((gun, i) => {
    
    const titles = [];
    const stats = [];

    Object.keys(gun).map((gunStat, i) => {

      // You can push JSX to an array!!!!!!
      if (gunStat === "kdRatio" || gunStat === "accuracy") {
        titles.push(<h3>{gunStat}</h3>)
        stats.push(<h3>{gun[gunStat].toFixed(2)}</h3>)
      } else {
        titles.push(<h3>{gunStat}</h3>)
        stats.push(<h3>{gun[gunStat]}</h3>)
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
        cat={categories[gunNavSelected]}
      />
      </>
    )
  })

}