import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

/** Local imports */
// import getStatsForFavorites from '../helpers/getStatsForFavorites'
import gunDataObj from '../helpers/gunData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#191d24',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
  },
  paperButton: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
    fontSize: 15,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 20,
    marginRight: 40
  },
}));

export default function TrackedGuns(props) {
  const classes = useStyles();
  const { favorites, gunStats, deleteStat, achievements, displayedCards, compareGamerGuns } = props;

  return favorites.map((fav, index) => {
    const fixed = JSON.parse(fav.tracked_item);
    const gunCat = fixed.cat;
    const gunId = fixed.gun;
    const gunName = gunDataObj.gunNameObj[gunId];
    displayedCards.push(fixed.gun);
    const removedItem = { gunName: fixed.gun };

    const loopTrackedStats = () => {
      const stats = [];
      const favoriteGunStats = gunStats[0][gunCat][gunId].properties;
      if(gunStats && fixed) {
        for (const stat in favoriteGunStats) {
          if(favoriteGunStats[stat] % 1 > 0) {
            stats.push(<Grid item xs={1.5}>
              <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {favoriteGunStats[stat].toFixed(2)}</Paper>
              </Grid>);
          } else {
            stats.push(<Grid item xs={1.5}>
              <Paper className={classes.paper}>{gunDataObj.gunStatTitle[stat]}: {favoriteGunStats[stat]}</Paper>
              </Grid>);
            };
        };
        return stats; 
      };
    };

    const loopCompareStats = () => {
      const compareStatsReturn = [];
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

    const favoriteGunEarnedAchievements = () => {
      if(favorites.length > 0) {
        return earnedAchievements(gunStats[0][gunCat][gunId].properties);
      };
    }

    const compareEarnedAchievements = () => {
      if(compareGamerGuns.length > 0) {
        return earnedAchievements(compareGamerGuns[0][gunCat][gunId].properties);
    };
  };

    const earnedAchievements = (statsArray) => {
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
            return (<Tooltip title={achievement.name}><img className="achieve-icons" src={achievement.image} alt="" /></Tooltip>)
          };
          if ((statsArray.accuracy <= accuracyRatio) && (accuracyRatio > 0)) {
            return (<Tooltip title={achievement.name}><img className="achieve-icons" src={achievement.image} alt="" /></Tooltip>)
          };
          if ((statsArray.kdRatio >= kdRatio) && (kdRatio > 0)) {
            return (<Tooltip title={achievement.name}><img className="achieve-icons" src={achievement.image} alt="" /></Tooltip>)
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
              <img className="fav-gun-icon" src={fixed.image} alt=""/>
            </div>
            <div className="right-side">
               <div className={classes.root}>
                <Grid container spacing={1}>
                  {loopTrackedStats()}
                </Grid>
              </div>
              <div className="gun-achieves">
              <div className="unfav-button">
                <Button
                  variant="contained"
                  size='medium'
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => removeStat(fixed.gun)}
                  >
                  {gunName}
                </Button>
              </div>
                {favoriteGunEarnedAchievements()}
              </div>
            </div>
            <div className='compare-gamer-block'>
              <Grid container spacing={1}>
                {loopCompareStats()}
              </Grid>
              <br />
              <div className="gun-achieves">
                {compareEarnedAchievements()}
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </>
    );  
  })
};

