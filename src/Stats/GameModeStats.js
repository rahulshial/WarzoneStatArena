import React, { useState } from 'react'
import axios from 'axios'
import '../stats.css'
import { red } from '@material-ui/core/colors';



export default function GameModeStats(props) {
  const { shown, category } = props
  const [state, setState] = useState("TEST")
  // const modes = Object.keys(shown).map((stats) => {
  //   console.log(stats);
  // });
  console.log(shown.properties);
  console.log(category);

  // const showGameMode = () => Object.values(shown.properties).map((stat, i) => {
  //   return (
  //     <h4></h4>
  //     <h4>{stat}</h4>
  //   )
  // });


  const showGameMode = () => {
    if (category === "br") {
      return (
        <>
          <h1 style={{ textAlign: 'center' }}>WARZONE</h1>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h4>cash</h4>
            <h4>contracts</h4>
            <h4>deaths</h4>
            <h4>downs</h4>
            <h4>games</h4>
            <h4>kd</h4>
            <h4>kills</h4>
            <h4>revives</h4>
            <h4>score</h4>
            <h4>score</h4>
            <h4>Time</h4>
            <h4>tokens</h4>
            <h4>top</h4>
            <h4>top</h4>
            <h4>top</h4>
            <h4>wins</h4>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h4>{shown.properties.cash}</h4>
            <h4>{shown.properties.contracts}</h4>
            <h4>{shown.properties.deaths}</h4>
            <h4>{shown.properties.downs}</h4>
            <h4>{shown.properties.gamesPlayed}</h4>
            <h4>{shown.properties.kdRatio}</h4>
            <h4>{shown.properties.kills}</h4>
            <h4>{shown.properties.revives}</h4>
            <h4>{shown.properties.score}</h4>
            <h4>{shown.properties.scorePerMinute}</h4>
            <h4>{shown.properties.timePlayed}</h4>
            <h4>{shown.properties.tokens}</h4>
            <h4>{shown.properties.topFive}</h4>
            <h4>{shown.properties.topTen}</h4>
            <h4>{shown.properties.topTwentyFive}</h4>
            <h4>{shown.properties.wins}</h4>
          </div>
        </>
      )
    } else if (category === "gun") {
      return (
        <>
          <h1>Gun Game</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>setBacks: {shown.properties.setBacks}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>stabs: {shown.properties.stabs}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "dom") {
      return (
        <>
          <h1>Domination</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>captures: {shown.properties.captures}</h4>
          <h4>defends: {shown.properties.defends}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "war") {
      return (
        <>
          <h1>TDM</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>assists: {shown.properties.assists}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "hq") {
      return (
        <>
          <h1>Head Quarters</h1>
          <h4>captures: {shown.properties.captures}</h4>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>defends: {shown.properties.defends}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "hc_dom") {
      return (
        <>
          <h1>Hard Core Head Quarters</h1>
          <h4>captures: {shown.properties.captures}</h4>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>defends: {shown.properties.defends}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "koth") {
      return (
        <>
          <h1>Kig Of The Hill</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>defends: {shown.properties.defends}</h4>
          <h4>objective time: {shown.properties.objTime}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "arena") {
      return (
        <>
          <h1>Gunfight</h1>
          <h4>assists: {shown.properties.assists}</h4>
          <h4>damage: {shown.properties.damage}</h4>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "sd") {
      return (
        <>
          <h1>Search And Destroy</h1>
          <h4>defuses: {shown.properties.defuses}</h4>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>plants:{shown.properties.plants}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "cyber") {
      return (
        <>
          <h1>Cyber Attack</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>revives:{shown.properties.revives}</h4>
          <h4>plants:{shown.properties.plants}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    } else if (category === "arm") {
      return (
        <>
          <h1>GroundWar</h1>
          <h4>deaths: {shown.properties.deaths}</h4>
          <h4>captures: {shown.properties.captures}</h4>
          <h4>defends: {shown.properties.defends}</h4>
          <h4>kills:{shown.properties.kills}</h4>
          <h4>score: {shown.properties.score}</h4>
          <h4>score per min: {shown.properties.scorePerMinute}</h4>
          <h4>kd ratio: {shown.properties.kdRatio}</h4>
          <h4>time played: {shown.properties.timePlayed}</h4>
        </>
      )
    }
  }


  return (
    <div>
      {showGameMode()}


    </div>
  )
}





// const showGameMode = () => {
//   if (category === "br") {
//     return (
//       <>
//         <h1 style={{textAlign: 'center'}}>WARZONE</h1>
//         <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
//           <h4>cash</h4>
//           <h4>contracts</h4>
//           <h4>deaths</h4>
//           <h4>downs</h4>
//           <h4>games</h4>
//           <h4>kd</h4>
//           <h4>kills</h4>
//           <h4>revives</h4>
//           <h4>score</h4>
//           <h4>score</h4>
//           <h4>Time</h4>
//           <h4>tokens</h4>
//           <h4>top</h4>
//           <h4>top</h4>
//           <h4>top</h4>
//           <h4>wins</h4>
//         </div>
//         <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
//         <h4>{shown.properties.cash}</h4>
//         <h4>{shown.properties.contracts}</h4>
//         <h4>{shown.properties.deaths}</h4>
//         <h4>{shown.properties.downs}</h4>
//         <h4>{shown.properties.gamesPlayed}</h4>
//         <h4>{shown.properties.kdRatio}</h4>
//         <h4>{shown.properties.kills}</h4>
//         <h4>{shown.properties.revives}</h4>
//         <h4>{shown.properties.score}</h4>
//         <h4>{shown.properties.scorePerMinute}</h4>
//         <h4>{shown.properties.timePlayed}</h4>
//         <h4>{shown.properties.tokens}</h4>
//         <h4>{shown.properties.topFive}</h4>
//         <h4>{shown.properties.topTen}</h4>
//         <h4>{shown.properties.topTwentyFive}</h4>
//         <h4>{shown.properties.wins}</h4>
//         </div>
//       </>
//     )
//   } else if (category === "gun") {
//     return (
//       <>
//         <h1>Gun Game</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>setBacks: {shown.properties.setBacks}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>stabs: {shown.properties.stabs}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "dom") {
//     return (
//       <>
//         <h1>Domination</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>captures: {shown.properties.captures}</h4>
//         <h4>defends: {shown.properties.defends}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "war") {
//     return (
//       <>
//         <h1>TDM</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>assists: {shown.properties.assists}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "hq") {
//     return (
//       <>
//         <h1>Head Quarters</h1>
//         <h4>captures: {shown.properties.captures}</h4>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>defends: {shown.properties.defends}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "hc_dom") {
//     return (
//       <>
//         <h1>Hard Core Head Quarters</h1>
//         <h4>captures: {shown.properties.captures}</h4>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>defends: {shown.properties.defends}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "koth") {
//     return (
//       <>
//         <h1>Kig Of The Hill</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>defends: {shown.properties.defends}</h4>
//         <h4>objective time: {shown.properties.objTime}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "arena") {
//     return (
//       <>
//         <h1>Gunfight</h1>
//         <h4>assists: {shown.properties.assists}</h4>
//         <h4>damage: {shown.properties.damage}</h4>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "sd") {
//     return (
//       <>
//         <h1>Search And Destroy</h1>
//         <h4>defuses: {shown.properties.defuses}</h4>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>plants:{shown.properties.plants}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "cyber") {
//     return (
//       <>
//         <h1>Cyber Attack</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>revives:{shown.properties.revives}</h4>
//         <h4>plants:{shown.properties.plants}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   } else if (category === "arm") {
//     return (
//       <>
//         <h1>GroundWar</h1>
//         <h4>deaths: {shown.properties.deaths}</h4>
//         <h4>captures: {shown.properties.captures}</h4>
//         <h4>defends: {shown.properties.defends}</h4>
//         <h4>kills:{shown.properties.kills}</h4>
//         <h4>score: {shown.properties.score}</h4>
//         <h4>score per min: {shown.properties.scorePerMinute}</h4>
//         <h4>kd ratio: {shown.properties.kdRatio}</h4>
//         <h4>time played: {shown.properties.timePlayed}</h4>
//       </>
//     )
//   }
// }