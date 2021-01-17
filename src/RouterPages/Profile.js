import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../stats.css'
import TrackedGuns from '../TrackedGuns.js'
import bar from '../overlay/imgs/topBar.png'



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
  // console.log(state.trackedStats);




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

    return (
      <TrackedGuns
        favorites={state.favorites}
        displayedCards={state.displayedCards}
        deleteStat={deleteStat}
        achievements={earnedAchievements}
        // image={fixed.image}
      />
    )

    return (
      <>
        <div className="fav-guns-container">
          {/* {favItems} */}
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
