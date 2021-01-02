import React from 'react'
import '../stats.css'

export default function GameModeStats(props) {
  const { shown } = props
  const topRow = [];

  const modes = ["Gun Game", "Domination", "TDM", "Headquarters", "HardCore Domination", "Kill Confirmed Hardcore", "King Of The Hill", "Kill Confirmed", "Headquarters Hardcore", "Gunfight", "Plunder", "WARZONE", "Search And Destroy", "Grind", "Cyber Attack", "Team Deathmatch Hardcore", "br_all", "Search and Destroy Hardcore", "Ground War", "Cyber Attack HardCore", "Infected"]
  

  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  }

  return topRow.map((stat, i) => {
    const titles = [];
    const stats = [];
    Object.keys(stat).map((thing) => {
      // You can push JSX to an array!!!!!!
      titles.push(<h3>{thing}</h3>)
      stats.push(<h3>{stat[thing]}</h3>)
    })
    // You can place the array INSIDE the return and it will loop through!
    return (
      <>
        <h1>{modes[i]}</h1>
        <div className="top-row">
          {titles}
        </div>
        <div className="top-row">
          {stats}
        </div>
      </>
    )
  });
}
