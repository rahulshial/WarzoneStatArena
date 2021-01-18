import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stats.css'
// import '../styles/profile.css'
import TrackedGuns from '../Profile/TrackedGuns.js'
import bar from '../overlay/imgs/topBar.png'
import GamerStats from '../Profile/GamerStats';
export default function Profile(props) {
  const [state, setState] = useState({
    favorites: [],
    achievements: [],
    displayedCards: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements'),
      axios.get(`http://localhost:3030/stats/moho`)
    ])
      .then(([favorites, achievements, allData]) => {
        // console.log(allData.data[0].weeklyData);
        console.log(allData.data[3].lifetimeData);
        setState(prev => ({
          ...prev,
          favorites: favorites.data,
          achievements: achievements.data,
        }))
      })
      .catch(error => {
        console.log("WE GOT AN ERROR");
        console.log(error);
      });
  }, [state.displayedCards]);


  const deleteStat = (stat) => {
    const cardShown = state.displayedCards.filter(item => item !== stat)
    setState(prev => ({
      ...prev,
      displayedCards: cardShown
    }));
  };

  if (state.favorites.length > 0) {
    return (
      <>
        <div class='card-row'>
          <TrackedGuns
            favorites={state.favorites}
            displayedCards={state.displayedCards}
            deleteStat={deleteStat}
            achievements={state.achievements}
            />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div class='profile-page-gamer-stats'>
          <h3>Empty Favourites</h3>
        </div>
      </>
    );
  };
};
