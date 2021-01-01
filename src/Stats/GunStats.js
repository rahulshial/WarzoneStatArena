import React from 'react'
import axios from 'axios'
import '../stats.css'
import StatCard from './StatCard.js'


export default function GunStats({ shown, gunImgs }) {
  const topRow = []


  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  }

  const onButtonClick = (gun) => {
    const gunObj = {
      gun: "dsfl;gjk",
      hits: 33,
      kills: 69,
      kdRatio :69,
      accuracy: 69,
      shots: 69,
      headShots: 69,
    }

    axios
      .post("http://localhost:3030/trackedstats/addnew", gunObj)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return topRow.map((gun, i) => {
    const titles = [];
    const stats = [];
    // debugger
    Object.keys(gun).map((thing, i) => {
      // You can push JSX to an array!!!!!!
      if (thing === "kdRatio" || thing === "accuracy") {
        titles.push(<h3>{thing}</h3>)
        stats.push(<h3>{gun[thing].toFixed(2)}</h3>)
      } else {
        titles.push(<h3>{thing}</h3>)
        stats.push(<h3>{gun[thing]}</h3>)
      }
    })

    return (
      <StatCard
      onAdd={onButtonClick}
        gunName={Object.keys(shown)[i]}
        image={gunImgs[Object.keys(shown)[i]]}
        topRow={titles}
        statsRow={stats}
      />
    )
  })
}





// // Looping through whatever specific category was selected!

// // WE CAN ADD SORTING HERE gun.kills or gun.headshots
// const weapons = Object.keys(shown).map((gun) => {
//   const hits = shown[gun].properties.hits
//   const kills = shown[gun].properties.kills
//   const kdRatio = Math.round(shown[gun].properties.kdRatio * 100) / 100
//   const accuracy = Math.round(shown[gun].properties.accuracy * 100) / 100
//   const shots = shown[gun].properties.shots
//   // const deaths = shown[gun].properties.deaths // USE LATER?
//   const headShots = shown[gun].properties.headshots
//   const image = gunImgs[gun]

//   const onButtonClick = (gun) => {

//     // THIS NEEDS TO SEND THE API CALL RATHER THAN THE OBJ... THIS IS GETTING SET TO THE CURRENT KILLS AND WILL NOT UPDATE!!!


//     const gunObj = {
//       gun,
//       hits,
//       kills,
//       kdRatio,
//       accuracy,
//       shots,
//       headShots,
//       image,
//     }

//     axios
//       .post("http://localhost:3030/trackedstats/addnew", gunObj)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
//   return (
//     <StatCard
//       gunName={gun}
//       image={gunImgs[gun]}
//       hits={hits}
//       kills={kills}
//       kd={kdRatio}
//       headshots={headShots}
//       accuracy={accuracy}
//       shots={shots}
//       onAdd={onButtonClick}
//     />
//   )
// });

// return (
//   <>
//     {weapons}
//   </>
// )