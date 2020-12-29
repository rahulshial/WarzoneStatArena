import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../stats.css'
import CenteredTabs from '../StatNavBar';
import GunImage from '../GunImage'
import { AR, SMG, SG, LMG, MRKSMN, SNPR, PISTOL, LAUNCHER } from '../images.js'


export default function Guns(props) {
  const [state, setState] = useState({
    assaultRifles: [],
    shotGuns: [],
    marksman: [],
    snipers: [],
    tacticals: [],
    lethals: [],
    lmg: [],
    launcher: [],
    supers: [],
    pistol: [],
    other: [],
    smg: [],
    melee: [],
    shown: [],
    category: [],
  })

  const [tab, setTab] = useState(0);
  const [guns, setGuns] = useState(state.assaultRifles)

  useEffect(() => {
    console.log("In Axios");
    axios
      .get('https://shrouded-ridge-71805.herokuapp.com/g/moho')
      .then(res => {
        const assaultRifles = res.data.weapon_assault_rifle
        const shotGuns = res.data.weapon_shotgun
        const marksman = res.data.weapon_marksman
        const snipers = res.data.weapon_sniper
        const tacticals = res.data.tacticals
        const lethals = res.data.lethals
        const lmg = res.data.weapon_lmg
        const launcher = res.data.weapon_launcher
        const supers = res.data.supers
        const pistol = res.data.weapon_pistol
        const other = res.data.weapon_other
        const smg = res.data.weapon_smg
        const melee = res.data.weapon_melee

        setState(prev => ({
          ...prev,
          assaultRifles: assaultRifles,
          shotGuns: shotGuns,
          marksman: marksman,
          snipers: snipers,
          tacticals: tacticals,
          lethals: lethals,
          lmg: lmg,
          launcher: launcher,
          supers: supers,
          pistol: pistol,
          other: other,
          smg: smg,
          melee: melee,
          shown: assaultRifles,
          category: AR,
        }))

      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  // Checking for what tab is selected on the stats page
  const tabSelected = (indexValue) => {

    const categories = ["assaultRifles", "marksman", "snipers", "smg", "tacticals", "lethals", "lmg", "launcher", "pistol", "shotGuns", "supers", "other", "melee"];

    const gunCat = [
      AR,
      MRKSMN,
      SNPR,
      SMG,
      AR,
      AR,
      LMG,
      LAUNCHER,
      PISTOL,
      SG,
    ]

    // shown = setting the cat state to an object of the category
    setState(prev => ({
      ...prev,
      shown: state[categories[indexValue]],
      category: gunCat[indexValue]
    }))
  };

  return (
    <div style={{ display: "flex-box", flexDirection: 'center' }}>
      <h1>STATS</h1>
      <CenteredTabs
        onSelect={tabSelected}
      />

      <div className="card-row">
        <GunImage
          shown={state.shown}
          gunImgs={state.category}
        />
      </div>
    </div>
  )
}