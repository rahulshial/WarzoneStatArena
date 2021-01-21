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
  })
  //  const preFix = 'weeklyData.all.properties.'
  useEffect(() => {
    const lastSegment = window.location.pathname.split("/").pop();
    axios.get(`http://localhost:3030/overlay/show/${lastSegment}`)
      .then((res) => {
        const parsedStats = JSON.parse(res.data[0].stats)
        const fixedTag = res.data[0].gamer_tag.replace("#", "%23")
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
            console.log(res.data[0].weeklyData.all.properties);
            setState(prev => ({
              ...prev,
              weeklyData: res.data[0].weeklyData.all.properties
            }))
          })
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  console.log(state.size);
  if (state.size === 'Small' && state.weeklyData) {
    console.log(state.size);
    console.log(state.weeklyData);
    const statName1 = Object.keys(state.stats)[0]
    const statValue1 = state.weeklyData[state.stats[Object.keys(state.stats)[0]]]
    const statName2 = Object.keys(state.stats)[1]
    const statValue2 = state.weeklyData[state.stats[Object.keys(state.stats)[1]]]
    const statName3 = Object.keys(state.stats)[2]
    const statValue3 = state.weeklyData[state.stats[Object.keys(state.stats)[2]]]
    const statName4 = Object.keys(state.stats)[3]
    const statValue4 = state.weeklyData[state.stats[Object.keys(state.stats)[3]]]
    return (
      <div>
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
      </div>
    )
  } else if (state.size === 'Large' && state.weeklyData) {
    console.log("LARGE");
    console.log(state.weeklyData);
    const statName1 = Object.keys(state.stats)[0]
    const statValue1 = state.weeklyData[state.stats[Object.keys(state.stats)[0]]]
    const statName2 = Object.keys(state.stats)[1]
    const statValue2 = state.weeklyData[state.stats[Object.keys(state.stats)[1]]]
    const statName3 = Object.keys(state.stats)[2]
    const statValue3 = state.weeklyData[state.stats[Object.keys(state.stats)[2]]]
    const statName4 = Object.keys(state.stats)[3]
    const statValue4 = state.weeklyData[state.stats[Object.keys(state.stats)[3]]]
    const statName5 = Object.keys(state.stats)[4]
    const statValue5 = state.weeklyData[state.stats[Object.keys(state.stats)[4]]]
    const statName6 = Object.keys(state.stats)[5]
    const statValue6 = state.weeklyData[state.stats[Object.keys(state.stats)[5]]]
    const statName7 = Object.keys(state.stats)[6]
    const statValue7 = state.weeklyData[state.stats[Object.keys(state.stats)[6]]]
    const statName8 = Object.keys(state.stats)[7]
    const statValue8 = state.weeklyData[state.stats[Object.keys(state.stats)[7]]]
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




