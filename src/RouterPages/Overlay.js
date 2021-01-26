import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/overlay.css'
import OverlayNav from '../Overlay/OverlayNav'
import OverlayBar from '../Overlay/OverlayBar';

export default function Overlay() {
  const [state, setState] = useState({
    weeklyData: {},
    gameModes: {},
    gunData: {},
    lifetimeData: {},
    overlaySelected: "Small",
  })

  useEffect(() => {

    // When we have someone logged in we will replace this with logged in cookies?
    const gamerTag = 'stefler%231173';
    const gamerPlatform = 'battle';
    axios.get(`http://localhost:3030/stats/${gamerTag}&${gamerPlatform}`)
    
      .then(res => {
        if (res.data[0].weeklyData) {

          setState(prev => ({
            ...prev,
            weeklyData: res.data[0],
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))

        } else {

          setState(prev => ({
            ...prev,
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))
          
        }

      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  const overlaySelected = (index) => {
    const size = ["Small", "Large"]
    setState(prev => ({
      ...prev,
      overlaySelected: size[index]
    }))
  }

  if (Object.keys(state.gameModes).length !== 0) {
    return (
      <div style={{
        backgroundColor: '#191d24',
        height: "93.3vh",
      }}>
        <OverlayNav
          onSelect={overlaySelected}
        />
        <OverlayBar
          gameModes={state.gameModes}
          lifetimeData={state.lifetimeData}
          gunData={state.gunData}
          weeklyData={state.weeklyData}
          overlaySize={state.overlaySelected}
        />
      </div>
    )

  } else {
    return (
      <h1>Loading</h1>
    )
  }
}
