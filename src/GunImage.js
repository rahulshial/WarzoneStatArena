import React, { useState } from 'react'
import axios from 'axios'
import './stats.css'
import StatCard from './StatCard.js'


const favs = []
export default function GunImage(props) {
  const { shown, gunImgs } = props
  // Looping through whatever specific category was selected!

  // WE CAN ADD SORTING HERE gun.kills or gun.headshots
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
      axios
        .post("http://localhost:3030/favourited/moho", gunObj)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
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


