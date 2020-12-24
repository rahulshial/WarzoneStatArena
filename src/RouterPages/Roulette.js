import React, { useState } from "react";
import SwitchesSize from '../Switch'



export default function Roullette() {
  const [state, setState] = useState({
    guns: [],
    dropZones: []
  })


  function generateRoullette() {
  
  
    let arr1 = ["Ak47", "Kilo433", "falima", "november", "sierra12", "falpha", "FAL", "galima", "mcharlie", "mike4", "Kilo433", "sierra552", "tango21", "valpha"];
    let allowableChars1 = Math.floor(Math.random()*arr1.length);
    const guns = arr1[allowableChars1]
    setState(prev => ({
      ...prev,
      guns,
    }))
  

    let arr = ["TV Station", "Stadium", "Boneyard", "Dam", "Downtown", "Farmland", "Airport", "Storage Town", "Superstore", "Quarry", "Military Base", "Train Station", "Promenade West", "Promenade East", "Hospital", "Lumber", "Prison", "Port"];
    let allowableChars = Math.floor(Math.random()*arr.length);
    const dropZones = arr[allowableChars]
    setState(prev => ({
      ...prev,
      dropZones,
    }))
  

  }

  

  return (
    <div>

      <div className ="guns">
        <h1>Gun</h1>
        <br/>
        <h1 style={{color:"red"}}>
          {state.guns}
        </h1>
      </div>
      <br/>
      <div className="dropZone">
        <h1>dropZone</h1>
        <br/>
        <h1 style={{color:"red"}}>
          {state.dropZones}
        </h1>
      </div>
    <button onClick={generateRoullette}>Roullette</button>
    </div>
    
  )
}




