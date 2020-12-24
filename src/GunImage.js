import React, { useState } from 'react'
import './stats.css'
import StatCard from './StatCard.js'

// THIS CAN BE REMOVED SOON!
const gunNames = ['RAM-7', "M4A1", "AS VAL", "FR 5.56", "M13", "AK-47", "Oden", "CR-56 AMAX", "Grau 5.56", "FAL", "AN-94", "Kilo-141", "FN Scar 17"]

const favs = []

export default function GunImage(props) {
  const { shown, gunImgs } = props
  // THIS IS OUR LOOP THROUGH SPECIFICALLY AR'S AND STATS
  // https://gyazo.com/c46f6b283da6cffbab9a14605683eef7

  const weapons = Object.keys(shown).map((gun) => {

    const hits = shown[gun].properties.hits
    const kills = shown[gun].properties.kills
    const kdRatio = Math.round(shown[gun].properties.kdRatio * 100) / 100
    const accuracy = Math.round(shown[gun].properties.accuracy * 100) / 100
    const shots = shown[gun].properties.shots
    const deaths = shown[gun].properties.deaths
    const headShots = shown[gun].properties.headshots
    const image = gunImgs[gun]


    const onButtonClick = (gun) => {
      
      const gunObj = {
        gun,
        hits,
        kills,
        kdRatio,
        accuracy,
        shots,
        headShots,
        image,
      }
      console.log(gunObj.image);
      favs.push(gunObj)
      const gunsArr = JSON.stringify(favs)
      localStorage.setItem("name", gunsArr)
    }
    return (
      <StatCard
        gunName={gun}
        image={gunImgs[gun]}
        hits={hits}
        kills={kills}
        kd={kdRatio}
        headshots={headShots}
        accuracy={accuracy}
        shots={shots}
        onAdd={onButtonClick}
      />
    )
  });





  return (
    <>
      {weapons}
    </>
  )

}


