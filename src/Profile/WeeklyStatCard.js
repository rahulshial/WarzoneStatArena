import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: "#0f0e18",
    borderLeft: '2px solid',
  },
  paperEmpty: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
  },
  statValue: {
    color: "#dadada",
  },
}));

export default function WeeklyStatCard({weeklyData}) {
  const classes = useStyles();
console.log('Weekly Data: ', weeklyData.length)
  if(weeklyData[0] !== null) {
    const avgLifeTime = weeklyData[0].avgLifeTime / 60;
    const headShotPercent = weeklyData[0].headshotPercentage * 100;
    const timePlayed = weeklyData[0].timePlayed / 60;
    const distanceTraveled = weeklyData[0].distanceTraveled / 39370.1
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
              <Paper className={classes.paper}>KD Ratio: <strong className={classes.statValue}>{weeklyData[0].kdRatio.toFixed(2)}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Kills: <strong className={classes.statValue}>{weeklyData[0].kills}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Gulag Kills: <strong className={classes.statValue}>{weeklyData[0].gulagKills}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Deaths: <strong className={classes.statValue}>{weeklyData[0].deaths}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Gulag Deaths: <strong className={classes.statValue}>{weeklyData[0].gulagDeaths}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Kills/game: <strong className={classes.statValue}>{weeklyData[0].killsPerGame.toFixed(2)}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Wall Bangs: <strong className={classes.statValue}>{weeklyData[0].wallBangs}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Head Shots: <strong className={classes.statValue}>{weeklyData[0].headshots} @{headShotPercent.toFixed(2)}%</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Near Misses: <strong className={classes.statValue}>{weeklyData[0].nearmisses}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Executions: <strong className={classes.statValue}>{weeklyData[0].executions}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Assists: <strong className={classes.statValue}>{weeklyData[0].assists}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Damage Taken: <strong className={classes.statValue}>{weeklyData[0].damageTaken}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Damage Done: <strong className={classes.statValue}>{weeklyData[0].damageDone}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Avg Life: <strong className={classes.statValue}>{avgLifeTime.toFixed(2)} min</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Score: <strong className={classes.statValue}>{weeklyData[0].score} @ {weeklyData[0].scorePerMinute.toFixed(2)} / min</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Distance Travelled: <strong className={classes.statValue}>{distanceTraveled.toFixed(0)} kms</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Time Played: <strong className={classes.statValue}>{timePlayed.toFixed(0)} mins</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Matches: <strong className={classes.statValue}>{weeklyData[0].matchesPlayed}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Teams Wiped: <strong className={classes.statValue}>{weeklyData[0].objectiveTeamWiped}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Down Player Kills: <strong className={classes.statValue}>{weeklyData[0].objectiveLastStandKill}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Vehicles Destroyed: <strong className={classes.statValue}>{weeklyData[0].objectiveDestroyedVehicleMedium? weeklyData[0].objectiveDestroyedVehicleMedium : 0 }</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Missions Accepted: <strong className={classes.statValue}>{weeklyData[0].objectiveBrMissionPickupTablet}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Mates Revived: <strong className={classes.statValue}>{weeklyData[0].objectiveReviver}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Buy Station: <strong className={classes.statValue}>{weeklyData[0].objectiveBrKioskBuy}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Cache Opened: <strong className={classes.statValue}>{weeklyData[0].objectiveBrCacheOpen}</strong></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  else {
    return (
      <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperEmpty}>You have not played this week!</Paper>
        </Grid>
      </Grid>
    </div>
    );
  };
};