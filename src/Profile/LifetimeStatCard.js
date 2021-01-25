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
  statValue: {
    color: "#dadada",
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
            <Paper className={classes.paper}>Curr Win Streak: <strong className={classes.statValue}>{lifetimeData[0].currentWinStreak}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills: <strong className={classes.statValue}>{lifetimeData[0].bestKills}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths: <strong className={classes.statValue}>{lifetimeData[0].bestDeaths}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>KD Ratio: <strong className={classes.statValue}>{lifetimeData[0].bestKD}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Stabs: <strong className={classes.statValue}>{lifetimeData[0].bestStabs}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Assists: <strong className={classes.statValue}>{lifetimeData[0].bestAssists}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score: <strong className={classes.statValue}>{lifetimeData[0].bestScore} @{lifetimeData[0].bestSPM}/min</strong></Paper>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Paper className={classes.paper}><strong>Lifetime</strong></Paper>
          </Grid>          
          <Grid item xs={2}>
            <Paper className={classes.paper}>KD Ratio: <strong className={classes.statValue}>{lifetimeData[0].kdRatio.toFixed(2)}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills: <strong className={classes.statValue}>{lifetimeData[0].kills}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths: <strong className={classes.statValue}>{lifetimeData[0].deaths}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Suicides: <strong className={classes.statValue}>{lifetimeData[0].suicides}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Head Shots: <strong className={classes.statValue}>{lifetimeData[0].headshots}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Accuracy: <strong className={classes.statValue}>{accuracy.toFixed(2)}%</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Hits: <strong className={classes.statValue}>{lifetimeData[0].hits}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Misses: <strong className={classes.statValue}>{lifetimeData[0].misses}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Assists: <strong className={classes.statValue}>{lifetimeData[0].assists}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Games: <strong className={classes.statValue}>{lifetimeData[0].totalGamesPlayed}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Time Played: <strong className={classes.statValue}>{timePlayedTotal.toFixed(0)} mins</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Game Wins: <strong className={classes.statValue}>{lifetimeData[0].wins}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Game Loss: <strong className={classes.statValue}>{lifetimeData[0].losses}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>W/L Ratio: <strong className={classes.statValue}>{winLossRatio.toFixed(2)}%</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score: <strong className={classes.statValue}>{lifetimeData[0].score}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score  / game: <strong className={classes.statValue}>{lifetimeData[0].scorePerGame.toFixed(2)}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Score / min: <strong className={classes.statValue}>{lifetimeData[0].scorePerMinute.toFixed(2)}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Longest Win Streak: <strong className={classes.statValue}>{lifetimeData[0].recordLongestWinStreak}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kill Streak: <strong className={classes.statValue}>{lifetimeData[0].recordKillStreak}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Kills / match: <strong className={classes.statValue}>{lifetimeData[0].recordKillsInAMatch}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Deaths / match: <strong className={classes.statValue}>{lifetimeData[0].recordDeathsInAMatch}</strong></Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>XP in Match: <strong className={classes.statValue}>{lifetimeData[0].recordXpInAMatch}</strong></Paper>
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