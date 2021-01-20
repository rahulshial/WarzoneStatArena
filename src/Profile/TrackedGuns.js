import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/** Local imports */
import getStatsForFavorites from '../helpers/getStatsForFavorites'
import gunDataObj from '../helpers/gunData'

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
    const gunId = fixed.gun;
    console.log("Gun Name from Object: ", gunDataObj.gunNameObj[gunId]);
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
                {earnedAchievements()}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  })
};
