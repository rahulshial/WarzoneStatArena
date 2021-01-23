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

export default function LifetimeStatCard({lifetimeData}) {
  const classes = useStyles();
  
  if(lifetimeData.length > 0) {
    const accuracy = lifetimeData[0].accuracy * 100;
    const timePlayedTotal = lifetimeData[0].timePlayedTotal / 60;
    const winLossRatio = lifetimeData[0].winLossRatio * 100;

    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}><strong>Best</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Curr Win Streak: {lifetimeData[0].currentWinStreak}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills: {lifetimeData[0].bestKills}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths: {lifetimeData[0].bestDeaths}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>KD Ratio: {lifetimeData[0].bestKD}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Stabs: {lifetimeData[0].bestStabs}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Assists: {lifetimeData[0].bestAssists}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score: {lifetimeData[0].bestScore} @{lifetimeData[0].bestSPM}/min</Paper>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}><strong>Lifetime</strong></Paper>
          </Grid>          
          <Grid item xs={2}>
            <Paper className={classes.paper}>KD Ratio: {lifetimeData[0].kdRatio.toFixed(2)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills: {lifetimeData[0].kills}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths: {lifetimeData[0].deaths}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Suicides: {lifetimeData[0].suicides}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Head Shots: {lifetimeData[0].headshots}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Accuracy: {accuracy.toFixed(2)}%</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Hits: {lifetimeData[0].hits}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Misses: {lifetimeData[0].misses}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Assists: {lifetimeData[0].assists}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Games: {lifetimeData[0].totalGamesPlayed}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Time Played: {timePlayedTotal.toFixed(0)} mins</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Game Wins: {lifetimeData[0].wins}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Game Loss: {lifetimeData[0].losses}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>W/L Ratio: {winLossRatio.toFixed(2)}%</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score: {lifetimeData[0].score}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score  / game: {lifetimeData[0].scorePerGame.toFixed(2)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score / min: {lifetimeData[0].scorePerMinute.toFixed(2)}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Longest Win Streak: {lifetimeData[0].recordLongestWinStreak}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kill Streak: {lifetimeData[0].recordKillStreak}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills / match: {lifetimeData[0].recordKillsInAMatch}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths / match: {lifetimeData[0].recordDeathsInAMatch}</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>XP in Match: {lifetimeData[0].recordXpInAMatch}</Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
  else {
    return (
    <h4>Please wait, fetching data!</h4>
    );
  };
};