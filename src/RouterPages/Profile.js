import React, { useState, useEffect, useContext, globalStateContext } from 'react'
import axios from 'axios';
import '../stats.css'
import TrackedGuns from '../TrackedGuns.js'

export default function Profile(props) {

  const [state, setState] = useState({
    favorites: [],
    achievements: [],
    displayedCards: [],
  })


  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements')
    ])
      .then(([favorites, achievements]) => {
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


  if (state.favorites.length > 0) {
    const favItems = state.favorites.map((fav, index) => {
      const fixed = JSON.parse(fav.tracked);
      state.displayedCards.push(fixed.gun)
      console.log(state.displayedCards);
      const removedItem = { gunName: fixed.gun}
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
          gunName={fixed.gun}
          hits={fixed.hits}
          kills={fixed.kills}
          kdRatio={fixed.kdRatio}
          headshots={fixed.headShots}
          accuracy={fixed.accuracy}
          shots={fixed.shots}
        />
      )
    })
    return (
      <>
        <div className="fav-guns-container">
          {favItems}
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
