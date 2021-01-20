import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../styles/profile.css'
import ProfileNavBar from '../Profile/ProfileNavBar'
import TrackedGuns from '../Profile/TrackedGuns.js'
import GamerStats from '../Profile/GamerStats';

export default function Profile(props) {
  const [state, setState] = useState({
    favorites: [],
    achievements: [],
    displayedCards: [],
    weeklyData: [],
    lifetimeData: [],
    shownTab: 0,
  });

  useEffect(() => {    
    const gamerTag = "Nickmercs%2311526"
    const gamerPlatform = "battle"
    const compareGamerTag = "SardarMamad%23371309"
    const compareGamerPlatform = "acti"

    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements'),
      axios.get(`http://localhost:3030/stats/${gamerTag}&${gamerPlatform}`),
      axios.get(`http://localhost:3030/stats/${compareGamerTag}&${compareGamerPlatform}`)
    ])
      .then(([favorites, achievements, allData, compareGamerData]) => {
        console.log('Compare Gamer Data: ', compareGamerData.data[2].guns);
        if (allData.data[0].weeklyData !== null) {
          const weeklyStatData = [allData.data[0].weeklyData.all.properties];
          const lifetimeStatData = [allData.data[3].lifetimeData];
          const compareGamerFavourites = [compareGamerData.data[2].guns];
          setState(prev => ({
            ...prev,
            favorites: favorites.data,
            achievements: achievements.data,
            weeklyData: weeklyStatData,
            lifetimeData: lifetimeStatData,
          }))
        }
        else {
          const lifetimeStatData = [allData.data[3].lifetimeData]
          setState(prev => ({
            ...prev,
            favorites: favorites.data,
            achievements: achievements.data,
            lifetimeData: lifetimeStatData
          }))
        }
      })
      .catch(error => {
        console.log("WE GOT AN ERROR", error);
      });
  }, [state.displayedCards]);

  const deleteStat = (stat) => {
    const cardShown = state.displayedCards.filter(item => item !== stat)
    setState(prev => ({
      ...prev,
      displayedCards: cardShown
    }));
  };

  const categorySelected = (indexValue) => {
    // This function sets the state for the specific shown state and category if we dont set states here the page crashes when you change from a stats to guns... because the guns component cant read the stats object and vice versa
       setState(prev => ({
        ...prev,
        shownTab: indexValue
      }))
  };

  const navBarsToShow = () => {
    if (state.shownTab === 0) {
      return (
        <div className='profile-page-gamer-stats'>
          <GamerStats 
          key={state.weeklyData}
          weeklyData={state.weeklyData}
          lifetimeData={state.lifetimeData}
        />
        </div>
      )
    }
    else {
      if (state.favorites.length > 0) {
        return (
          <div className='tracked-guns'>
          <TrackedGuns
            key={state.favorites}
            favorites={state.favorites}
            displayedCards={state.displayedCards}
            deleteStat={deleteStat}
            achievements={state.achievements}
            compareGamerStats={state.favorites}
            />
        </div>
        )
      }
      else {
        return (
          <div>
            <h3>Empty Favourites</h3>
          </div>
          )
      };
    };
  };
  
  return (
    <div>
      <ProfileNavBar
        onSelect={categorySelected}
      />
      {navBarsToShow()}
    </div >
  )
};
