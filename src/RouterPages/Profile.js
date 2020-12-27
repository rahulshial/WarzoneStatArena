import React, { useState, useEffect } from 'react'
import axios from 'axios';
import StatCard from '../StatCard.js'
import Achievements from '../Achievements'
import '../stats.css'
import PrimarySearchAppBar from '../Navbar.js';


export default function Profile(props) {

  const storedFavs = localStorage.getItem("name")
  const gunsArr = JSON.parse(storedFavs)

  const [state, setState] = useState({
    favorites: [],
    achievements: [],
  })

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3030/favorites/moho'),
      axios.get('http://localhost:3030/achieve/moho')
    ])
      .then(([favorites, achievements]) => {
        // console.log(favorites.data);
        setState(prev => ({
          ...prev,
          favorites: favorites.data,
          achievements: achievements.data,
        }))
      })
      .catch(error => {
        console.log("WE GOT AN ERROR");
        console.log(error);
      })
  }, [])


  const earnedAchievements = Object.keys(state.achievements).map((achievement) => {
    return (
      <img className="achiev-icons" src={state.achievements[achievement]} alt="" />
    )
  })

  if (state.favorites.length > 0) {
    console.log("TRUTH");
    const favItems = state.favorites.map((fav) => {
      console.log(fav);
      return (
        <StatCard
          image={fav.image}
          gunName={fav.gun}
          hits={fav.hits}
          kills={fav.kills}
          kd={fav.kd}
          headshots={fav.headshots}
          accuracy={fav.accuracy}
          shots={fav.shots}
        />
      )
    })
    return (
      <>
        {favItems}
        <div>
          <h3 style={{ backgroundColor: "#272928", color: "white" }}>Achievements</h3>
          {earnedAchievements}
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1>Empty</h1>
        <Achievements />
      </>
    )
  }
}
