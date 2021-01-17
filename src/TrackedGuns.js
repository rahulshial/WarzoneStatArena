import React, { useEffect, useState } from 'react'
import './stats.css'
import axios from 'axios';
import getStatsForFavorites from './helpers/getStatsForFavorites'

export default function TrackedGuns(props) {
  const { favorites, deleteStat, achievements, displayedCards } = props;
  const [trackedStats, setTrackedStats] = useState([]);
  console.log("CHECKING");

  useEffect(() => {
    return getStatsForFavorites(favorites)
    .then(data => {
      setTrackedStats(data)
    })
  }, [displayedCards])

  // useEffect(() => {
  // }, [trackedStats])

  return favorites.map((fav, index) => {
    console.log(fav);
    const fixed = JSON.parse(fav.tracked_item);
    displayedCards.push(fixed.gun)
    const removedItem = { gunName: fixed.gun }
    // console.log(trackedStats[index]);


    const loopTrackedStats = () => {
      const stats = [];
      for (const stat in trackedStats[index]) {
        // console.log('stat:');
        stats.push(<h4>{stat}: {trackedStats[index][stat]}</h4>)
      }
      return stats;
    }

    const earnedAchievements = () => achievements.map((achievement) => {
      let hasHitFlag = false;
      let headShotRatio = 0;
      let accuracyRatio = 0;
      let kdRatio = 0;
      //#################3
      // MAKE ACHIEVE FOR KILL COUNT AND ACCURACY
      let tempVar = {
        gunStat: trackedStats[index]
      };

      console.log('trackedGuns.js - gun: ', tempVar.gunStat);
  
      switch (achievement.category) {
        case 'headshots':
          headShotRatio = achievement.category_ratio;
          break;
        case 'accuracy':
          accuracyRatio = achievement.category_ratio;
          break;
        case 'kdratio':
          kdRatio = achievement.category_ratio;
          break;
        default:
          break;
      };
  
      // if ((gun.headshots >= headShotRatio) && (achievement.headShotRatio != null)) {
      //   hasHitFlag = true;
      // };
      // if ((gun.accuracy <= accuracyRatio) && (achievement.accuracyRatio != null)) {
      //   hasHitFlag = true;
      // };
      // if ((gun.kdRatio >= kdRatio) && (achievement.kdRatio != null)) {
      //   hasHitFlag = true;
      // };
      // add else if it always does this if all 3 are true
  
      if (hasHitFlag) {
        return <img className="achiev-icons" src={achievement.image} alt="" />
      };
    });

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
    };

    return (
      <>
        <div>
          <div className="fav-gun-card">
            <div className="card-img">
              <img className="fav-gun-icon" src={fixed.image} alt="" />
            </div>
            <div>
              <button onClick={() => removeStat(fixed.gun)}>Remove</button>
              <div className="right-side">
                <h3 style={{ textAlign: 'center' }}>{fixed.gun}</h3>
                <hr />
              </div>
              <div>
                {loopTrackedStats()}
              </div>
              <hr />
              <div>
                <h3 style={{ textAlign: 'center' }}>achives</h3>
              </div>
              <hr />
              <div className="gun-achieves">
                {earnedAchievements()}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
}


{/* <h5>Kills: {props.kills}</h5>
<h5>Shots: {props.shots}</h5>
<h5>Hits: {props.hits}</h5>
<h5>KD: {props.kdRatio}</h5>
<h5>Head Shots: {props.headshots}</h5>
<h5>Accuracy: {props.accuracy}</h5> */}