import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stats.css'
import '../styles/profile.css'
import ProfileNavBar from '../Profile/ProfileNavBar'
import TrackedGuns from '../Profile/TrackedGuns.js'
import bar from '../overlay/imgs/topBar.png'
import GamerStats from '../Profile/GamerStats';
export default function Profile(props) {
  const [state, setState] = useState({
    favorites: [],
    achievements: [],
    displayedCards: [],
    weeklyData: [],
    lifetimeData: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements'),
      axios.get(`http://localhost:3030/stats/moho`)
    ])
      .then(([favorites, achievements, allData]) => {
        console.log('Weekly Data: ', allData.data[0].weeklyData.all.properties);
        console.log('Lifetime Data: ', allData.data[3].lifetimeData);
        const weeklyStatData = [allData.data[0].weeklyData.all.properties];
        const lifetimeStatData = [allData.data[3].lifetimeData]
        setState(prev => ({
          ...prev,
          favorites: favorites.data,
          achievements: achievements.data,
          weeklyData: weeklyStatData,
          lifetimeData: lifetimeStatData
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
        <div className='profile-page'>
          <div className='profile-page-gamer-stats'>
            <GamerStats 
            key={state.weeklyData}
            weeklyData={state.weeklyData}
            lifetimeData={state.lifetimeData}
            />
          </div>
          <hr></hr>
          <div className='tracked-guns'>
            <TrackedGuns
              key={state.favorites}
              favorites={state.favorites}
              displayedCards={state.displayedCards}
              deleteStat={deleteStat}
              achievements={state.achievements}
              />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div class='profile-page'>
        <div class='profile-page-gamer-stats'>
        <GamerStats
            key={'key'}
            weeklyData={state.weeklyData}
            lifetimeData={state.lifetimeData}
        />
        </div>
        <hr></hr>
        <div>
          <h3>Empty Favourites</h3>
        </div>
        </div>
      </>
    );
  };
};
