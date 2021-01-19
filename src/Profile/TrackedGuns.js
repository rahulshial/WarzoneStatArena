import React, { useEffect, useState } from 'react'
import axios from 'axios';
import getStatsForFavorites from '../helpers/getStatsForFavorites'

export default function TrackedGuns(props) {
  const { favorites, deleteStat, achievements, displayedCards } = props;
  const [trackedStats, setTrackedStats] = useState([]);

  useEffect(() => {
    return getStatsForFavorites(favorites)
    .then(data => {
      setTrackedStats(data)
    })
  }, [displayedCards])

  return favorites.map((fav, index) => {
    console.log('Favourite: ',fav);
    const fixed = JSON.parse(fav.tracked_item);
    displayedCards.push(fixed.gun);
    const removedItem = { gunName: fixed.gun };
    const loopTrackedStats = () => {
      const stats = [];
      for (const stat in trackedStats[index]) {
        stats.push(<h4>{stat}: {trackedStats[index][stat]}</h4>);
      }
      return stats;
    };

    const earnedAchievements = () => {
      if(trackedStats[index]) {
        return achievements.map((achievement) => {
          let headShotRatio = 0;
          let accuracyRatio = 0;
          let kdRatio = 0;        
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
          if ((trackedStats[index].headshots >= headShotRatio) && (headShotRatio > 0)) {
            return <img className="achiev-icons" src={achievement.image} alt="" />
          };
          if ((trackedStats[index].accuracy <= accuracyRatio) && (accuracyRatio > 0)) {
            return <img className="achiev-icons" src={achievement.image} alt="" />
          };
          if ((trackedStats[index].kdRatio >= kdRatio) && (kdRatio > 0)) {
            return <img className="achiev-icons" src={achievement.image} alt="" />
          };
        });      
      };
    };

    const removeStat = () => {
      axios
        // change to .delete
        .post("http://localhost:3030/trackedstats/removestat", removedItem)
        .then((res) => {
          deleteStat(fixed.gun)
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <>
        <div class='tracked-guns'>
          <div className="fav-gun-card">
            <div className="card-img">
              <img className="fav-gun-icon" src={fixed.image} alt="" />
            </div>
            <div>
              <button onClick={() => removeStat(fixed.gun)}>Unfavourite</button>
              <div className="right-side">
                <h3>{fixed.gun}</h3>
                <hr />
              </div>
              <div>
                {loopTrackedStats()}
              </div>
              <hr />
              <div>
                <h3 style={{ textAlign: 'center' }}>Achievements</h3>
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
};
