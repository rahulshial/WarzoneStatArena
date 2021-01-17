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
        console.log('Profile.js - achievements: ', achievements);
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

  // const earnedAchievements = (gun) => state.achievements.map((achievement) => {
  //   let hasHitFlag = false;
  //   let headShotRatio = 0;
  //   let accuracyRatio = 0;
  //   let kdRatio = 0;
  //   //#################3
  //   // MAKE ACHIEVE FOR KILL COUNT AND ACCURACY

  //   console.log('Profile.js - gun: ', gun);

  //   switch (achievement.category) {
  //     case 'headshots':
  //       headShotRatio = achievement.category_ratio;
  //       break;
  //     case 'accuracy':
  //       accuracyRatio = achievement.category_ratio;
  //       break;
  //     case 'kdratio':
  //       kdRatio = achievement.category_ratio;
  //       break;
  //     default:
  //       break;
  //   };

  //   if ((gun.headshots >= headShotRatio) && (achievement.headShotRatio != null)) {
  //     hasHitFlag = true;
  //   };
  //   if ((gun.accuracy <= accuracyRatio) && (achievement.accuracyRatio != null)) {
  //     hasHitFlag = true;
  //   };
  //   if ((gun.kdRatio >= kdRatio) && (achievement.kdRatio != null)) {
  //     hasHitFlag = true;
  //   };
  //   // add else if it always does this if all 3 are true

  //   if (hasHitFlag) {
  //     return <img className="achiev-icons" src={achievement.image} alt="" />
  //   };
  // });

  const deleteStat = (stat) => {
    const cardShown = state.displayedCards.filter(item => item !== stat)
    setState(prev => ({
      ...prev,
      displayedCards: cardShown
    }));
  };

  if (state.favorites.length > 0) {
    return (
      <TrackedGuns
        favorites={state.favorites}
        displayedCards={state.displayedCards}
        deleteStat={deleteStat}
        // achievements={earnedAchievements}
        achievements={state.achievements}
        // image={fixed.image}
      />
    )
  } else {
    return (
      <>
        <h1>Empty</h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        </div>
      </>
    );
  };
};
