import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/** Local imports */
import getStatsForFavorites from '../helpers/getStatsForFavorites'
import gunDataObj from '../helpers/gunData'
// import GunCard from './GunCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function TrackedGuns(props) {
  const classes = useStyles();
  const { favorites, deleteStat, achievements, displayedCards, compareGamerGuns } = props;
  const [trackedStats, setTrackedStats] = useState([]);

  useEffect(() => {
    return getStatsForFavorites(favorites)
    .then(data => {
      setTrackedStats(data)
    })
  }, [favorites])

  return favorites.map((fav, index) => {
    // console.log('TRACKED GUNS - Favourites: ',fav);
    // console.log('TRACKED GUNS - Compare Gamer Guns: ', compareGamerGuns);
    const fixed = JSON.parse(fav.tracked_item);
    const gunCat = fixed.cat;
    const gunId = fixed.gun;
    const gunName = gunDataObj.gunNameObj[gunId];
    displayedCards.push(fixed.gun);
    const removedItem = { gunName: fixed.gun };

    const loopTrackedStats = () => {
      const stats = [];
      for (const stat in trackedStats[index]) {
        if(trackedStats[index][stat] % 1 > 0) {
          stats.push(<Grid item xs={1.5}>
            <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {trackedStats[index][stat].toFixed(2)}</Paper>
            </Grid>);
          } else {
            stats.push(<Grid item xs={1.5}>
              <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {trackedStats[index][stat]}</Paper>
              </Grid>);
            }
      }
      return stats;
    };

    const loopCompareStats = () => {
      const compareStatsReturn = [];
      console.log(compareGamerGuns.length)
      if(compareGamerGuns.length > 0) {
        const compareGunStats = compareGamerGuns[0][gunCat][gunId].properties
        if(compareGamerGuns && fixed) {
          for (const stat in compareGunStats) {
            if(compareGunStats[stat] % 1 > 0) {
              compareStatsReturn.push(<Grid item xs={1.5}>
                <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {compareGunStats[stat].toFixed(2)}</Paper>
                </Grid>);
            } else {
              compareStatsReturn.push(<Grid item xs={1.5}>
                <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {compareGunStats[stat]}</Paper>
                </Grid>);
              };
          };
          return compareStatsReturn; 
        };
      };
    };

    const compareEarnedAchievements = () => {
      if(compareGamerGuns.length > 0) {
        console.log('Calling Earned Achievements...');
        return earnedAchievements(compareGamerGuns[0][gunCat][gunId].properties);
    };
  };

    const earnedAchievements = (statsArray) => {
      console.log('Stats Array: ', statsArray);
      if(statsArray) {
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
          if ((statsArray.headshots >= headShotRatio) && (headShotRatio > 0)) {
            return <img className="achiev-icons" src={achievement.image} alt="" />
          };
          if ((statsArray.accuracy <= accuracyRatio) && (accuracyRatio > 0)) {
            return <img className="achiev-icons" src={achievement.image} alt="" />
          };
          if ((statsArray.kdRatio >= kdRatio) && (kdRatio > 0)) {
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
              <img className="fav-gun-icon" src={fixed.image} alt="" onClick={() => removeStat(fixed.gun)}/>
            </div>
            <div>
              <button onClick={() => removeStat(fixed.gun)}><h2>Unfavourite the {gunName}</h2></button>
              <div className="right-side">
                <hr />
              </div>
              <div className={classes.root}>
                <Grid container spacing={1}>
                  {loopTrackedStats()}
                </Grid>
              </div>
              <hr />
              <div>
                <h3 style={{ textAlign: 'center' }}>Achievements</h3>
              </div>
              <hr />
              <div className="gun-achieves">
                {earnedAchievements(trackedStats[index])}
              </div>
            </div>
            <div className='empty-block'>
              <h3>Empty Block</h3>
            </div>
            <div className='compare-gamer-block'>
              <h3>Compare Gamer Stats</h3>
              <Grid container spacing={1}>
                  {loopCompareStats()}
                </Grid>
                <hr />
              <div>
                <h3 style={{ textAlign: 'center' }}>Achievements</h3>
              </div>
              <hr />
              <div className="gun-achieves">
                {compareEarnedAchievements()}
              </div>
            </div>
          </div>
        </div>
      </>
    );  
  })
};

