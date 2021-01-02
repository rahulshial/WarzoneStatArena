import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stats.css'
import TrackedGuns from '../TrackedGuns.js'

export default function Profile(props) {
  const [state, setState] = useState({
    favorites: [],
    achievements: [],
    displayedCards: [],
    trackedStats: [],
  })

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements')
    ])
      .then(([favorites, achievements]) => {
        let newArr = [];
        favorites.data.map((fav, index) => {

          const fixed = JSON.parse(fav.tracked);
          axios.get(`http://localhost:3030/stats/moho/${fixed.gun}/${fixed.cat}`)
            .then(res => {
              // newArr.push(res.data)
              setState(prev => ({
                ...prev,
                favorites: favorites.data,
                achievements: achievements.data,
                trackedStats: [...state.trackedStats, res.data]
              }))
            })
            .catch(err => {
              console.log("we have an error");
              console.log(err);
            })

        });
      })

      .catch(error => {
        console.log("WE GOT AN ERROR");
        console.log(error);
      })


  }, [state.displayedCards])


  const earnedAchievements = (gun) => state.achievements.map((achievement) => {
    let hasHitFlag = false;
    //#################3
    // MAKE ACHIEVE FOR KILL COUNT AND ACCURACY 
    if ((gun.headShots >= achievement.headshots) && (achievement.headshots != null)) {
      hasHitFlag = true;
    }
    if ((gun.accuracy <= achievement.accuracy) && (achievement.accuracy != null)) {
      hasHitFlag = true;
    }
    if ((gun.kdRatio >= achievement.kdratio) && (achievement.kdratio != null)) {
      hasHitFlag = true;
    }
    // add else if it always does this if all 3 are true
    if (hasHitFlag) {
      return <img className="achiev-icons" src={achievement.badge} alt="" />
    }
  })

  const deleteStat = (stat) => {
    const cardShown = state.displayedCards.filter(item => item !== stat)
    setState(prev => ({
      ...prev,
      displayedCards: cardShown
    }))
  }
  console.log(state.trackedStats);


  const favItems = state.favorites.map((fav, index) => {

    const fixed = JSON.parse(fav.tracked);
    state.displayedCards.push(fixed.gun)
    const removedItem = { gunName: fixed.gun }

    const removeStat = () => {
      axios
        // change to .delete
        .post("http://localhost:3030/trackedstats/removestat", removedItem)
        .then((res) => {
          deleteStat(fixed.gun)
        })
        .catch((err) => {
          console.log(err);
        })
    }

    return (
      <TrackedGuns
        onRemove={removeStat}
        achievements={earnedAchievements(fixed)}
        image={fixed.image}
        stats={state.trackedStats}
        id={index}
      />
    )
  })


  if (state.favorites.length > 0) {


    return (
      <>
        <div className="fav-guns-container">
          {favItems}
          <h1>cats</h1>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <h1>Empty</h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        </div>
      </>
    )
  }

}
