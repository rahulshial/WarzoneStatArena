/** React Imports */
import React, { useState, useEffect } from 'react';

/** Material UI Imports */
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

/** Local imports */

import GamerStats from '../Profile/GamerStats';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1aff31',
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    color: "#ffd369",
    backgroundColor: "#565666",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: "#0f0e18",
  },
}));

export default function Overview(props) {
  const classes = useStyles();
  const { shown } = props
  console.log('All stats received: ',shown);
  const weeklyData = [shown.allstats.weekly.all.properties];
  const lifetimeData = [shown.allstats.lifetime.all.properties];

  console.log('Weekly Data: ', weeklyData);
  console.log('Lifetime Data: ', lifetimeData);
  
  const fullLevel = shown.allstats.levelXpGained + shown.allstats.levelXpRemainder;
  const percentageToLevel = shown.allstats.levelXpRemainder / fullLevel * 100;
  const percentageCompleted = 100 - percentageToLevel;
  const timePlayedTotal = shown.allstats.lifetime.mode.br.properties.timePlayed;

  return (
    <>
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
          <h1>{shown.allstats.username} stats on <strong>{shown.allstats.platform}</strong> at Level {shown.allstats.level}</h1>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={2}>
                <Paper className={classes.paper}><strong>Time Played:</strong> {timePlayedTotal}</Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper className={classes.paper}><strong>XP earned this level:</strong> {shown.allstats.levelXpGained}</Paper>
            </Grid>        
            <Grid item xs={2}>
                <Paper className={classes.paper}><strong>XP needed to level up:</strong> {shown.allstats.levelXpRemainder}</Paper>
            </Grid>        
            <Grid item xs={2}>
                <Paper className={classes.paper}><strong>To next Level:</strong> {percentageToLevel.toFixed(2)}%</Paper>
            </Grid>        
          </Grid>

          <BorderLinearProgress variant="determinate" value={percentageCompleted} />
        </CardContent>
      </Card>
    </div>
    <div className='profile-page-gamer-stats'>

    <GamerStats 
      key={weeklyData}
      weeklyData={weeklyData}
      lifetimeData={lifetimeData}
      />

    </div>
    </>
  )
}
