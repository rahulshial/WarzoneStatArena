import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CreatedSmallOverlay from './CreatedSmallOverlay';
import CreatedLargeOverlay from './CreatedLargeOverlay';

export default function OverlaySelected() {
  const [state, setState] = useState({
    stats: {},
    size: '',
    gamerTag: '',
    platform: '',
    gameModes: {}
  })

  useEffect(() => {
    const lastSegment = window.location.pathname.split("/").pop();
    axios.get(`http://localhost:3030/overlay/show/${lastSegment}`)
      .then((res) => {
        const parsedStats = JSON.parse(res.data[0].stats)
        const fixedTag = res.data[0].gamer_tag.replace("#", "%23")
        console.log(parsedStats);
        console.log(res.data[0].size);
        setState(prev => ({
          ...prev,
          stats: parsedStats,
          size: res.data[0].size,
        }))
        return ['Nickmercs%2311526', 'battle']
      })
      .then((res) => {
        
        axios.get(`http://localhost:3030/stats/${res[0]}&${res[1]}`)
          .then((res) => {
            console.log(res);
            setState(prev => ({
              ...prev,
              gameModes: res.data[1].gameModes.br.properties
            }))
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  if (state.size === 'Small' && Object.keys(state.gameModes).length > 0) {
    console.log(state.gameModes);
    const statName1 = Object.keys(state.stats)[0]
    const statValue1 = state.gameModes[state.stats[Object.keys(state.stats)[0]]]
    const statName2 = Object.keys(state.stats)[1]
    const statValue2 = state.gameModes[state.stats[Object.keys(state.stats)[1]]]
    const statName3 = Object.keys(state.stats)[2]
    const statValue3 = state.gameModes[state.stats[Object.keys(state.stats)[2]]]
    const statName4 = Object.keys(state.stats)[3]
    const statValue4 = state.gameModes[state.stats[Object.keys(state.stats)[3]]]
    return (
      <>
        <CreatedSmallOverlay
          statName1={statName1}
          statValue1={statValue1}
          statName2={statName2}
          statValue2={statValue2}
          statName3={statName3}
          statValue3={statValue3}
          statName4={statName4}
          statValue4={statValue4}
        />
      </>
    )
  } else if (state.size === 'Large' && Object.keys(state.gameModes).length > 0) {
    
    const statName1 = Object.keys(state.stats)[0]
    const statValue1 = state.gameModes[state.stats[Object.keys(state.stats)[0]]]
    console.log(statName1);
    console.log(state.gameModes);
    // console.log(state.gameModes);
    const statName2 = Object.keys(state.stats)[1]
    const statValue2 = state.gameModes[state.stats[Object.keys(state.stats)[1]]]
    const statName3 = Object.keys(state.stats)[2]
    const statValue3 = state.gameModes[state.stats[Object.keys(state.stats)[2]]]
    const statName4 = Object.keys(state.stats)[3]
    const statValue4 = state.gameModes[state.stats[Object.keys(state.stats)[3]]]
    const statName5 = Object.keys(state.stats)[4]
    const statValue5 = state.gameModes[state.stats[Object.keys(state.stats)[4]]]
    const statName6 = Object.keys(state.stats)[5]
    const statValue6 = state.gameModes[state.stats[Object.keys(state.stats)[5]]]
    const statName7 = Object.keys(state.stats)[6]
    const statValue7 = state.gameModes[state.stats[Object.keys(state.stats)[6]]]
    const statName8 = Object.keys(state.stats)[7]
    const statValue8 = state.gameModes[state.stats[Object.keys(state.stats)[7]]]
    return (
      <CreatedLargeOverlay
      statName1={statName1}
      statValue1={statValue1}
      statName2={statName2}
      statValue2={statValue2}
      statName3={statName3}
      statValue3={statValue3}
      statName4={statName4}
      statValue4={statValue4}
      statName5={statName5}
      statValue5={statValue5}
      statName6={statName6}
      statValue6={statValue6}
      statName7={statName7}
      statValue7={statValue7}
      statName8={statName8}
      statValue8={statValue8}
    />
    )
  } else {
    return (
      <h1>Grabbing Data</h1>
    )
  }
}




