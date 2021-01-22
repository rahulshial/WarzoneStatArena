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
  },
}));

export default function WeeklyStatCard({weeklyData}) {
  const classes = useStyles();
console.log('Weekly Data: ', weeklyData)
  if(weeklyData.length > 0) {
    const avgLifeTime = weeklyData[0].avgLifeTime / 60;
    const headShotPercent = weeklyData[0].headshotPercentage * 100;
    const timePlayed = weeklyData[0].timePlayed / 60;
    const distanceTraveled = weeklyData[0].distanceTraveled / 39370.1
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
              <Paper className={classes.paper}>KD Ratio: {weeklyData[0].kdRatio.toFixed(2)}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Kills: {weeklyData[0].kills}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Gulag: {weeklyData[0].gulagKills}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Deaths: {weeklyData[0].deaths}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Gulag: {weeklyData[0].gulagDeaths}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Kills/game: {weeklyData[0].killsPerGame.toFixed(2)}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Wall Bangs: {weeklyData[0].wallBangs}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Head Shots: {weeklyData[0].headshots} @{headShotPercent.toFixed(2)}%</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Near Misses: {weeklyData[0].nearmisses}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Executions: {weeklyData[0].executions}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Assists: {weeklyData[0].assists}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Damage Taken: {weeklyData[0].damageTaken}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Damage Done: {weeklyData[0].damageDone}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Avg Life: {avgLifeTime.toFixed(2)} min</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Score: {weeklyData[0].score} @ {weeklyData[0].scorePerMinute.toFixed(2)} / min</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Distance Travelled: {distanceTraveled.toFixed(0)} kms</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Time Played: {timePlayed.toFixed(0)} mins</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Matches: {weeklyData[0].matchesPlayed}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Teams Wiped: {weeklyData[0].objectiveTeamWiped}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Down Player Kills: {weeklyData[0].objectiveLastStandKill}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Vehicles Destroyed: {weeklyData[0].objectiveDestroyedVehicleMedium}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Missions Accepted: {weeklyData[0].objectiveBrMissionPickupTablet}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Mates Revived: {weeklyData[0].objectiveReviver}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Buy Station: {weeklyData[0].objectiveBrKioskBuy}</Paper>
          </Grid>
          <Grid item xs={2}>
              <Paper className={classes.paper}>Cache Opened: {weeklyData[0].objectiveBrCacheOpen}</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  else {
    return (
    <h4>You haven't played this week!!!</h4>
    );
  };
};