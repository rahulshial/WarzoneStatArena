/** React Imports */
import React from 'react';

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
    marginTop: 10,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(45deg, #fcc14c 30%, #1aff31 90%)'
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#ffd369",
    backgroundColor: "#565666",
  },
  title: {
    fontSize: 14,
    color: '#dea01e',
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#dea01e',
    backgroundColor: "#0f0e18",
    width: '100%',
    fontSize: '17px',
    borderBottom: '2px solid',
  },
  statTitle: {
    color: '#dea01e',
    fontSize: '16px',
  },
  statValue: {
    color: "#dadada",
  },
  gridBox: {
    display: 'flex',
  },
}));

export default function Overview(props) {
  const classes = useStyles();
  const { shown } = props;
  const weeklyData = [shown.allstats.weekly.all.properties];
  const lifetimeData = [shown.allstats.lifetime.all.properties];
  const fullLevel = shown.allstats.levelXpGained + shown.allstats.levelXpRemainder;
  const percentageToLevel = shown.allstats.levelXpRemainder / fullLevel * 100;
  const percentageCompleted = 100 - percentageToLevel;
  const timePlayedTotal = shown.allstats.lifetime.mode.br.properties.timePlayed;

  let platform = '';
  switch(shown.allstats.platform) {
    case 'uno':
      platform = 'activision';
      break;
    case 'xbl':
      platform = 'xbox';
      break;
    case 'battle':
      platform = 'battlenet';
      break;
    default:
      platform = shown.allstats.platform;
      break;
  };

  return (
    <>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} gutterBottom>
            <h1>{shown.allstats.username} stats on <strong>{platform}</strong> at Level {shown.allstats.level}</h1>
            </Typography>
            <Grid container spacing={1}>
              <Grid className={classes.gridBox} item xs={2}>
                  <Paper className={classes.paper} square>Time Played: <strong className={classes.statValue}>{timePlayedTotal}</strong></Paper>
              </Grid>
              <Grid item xs={2}>
                  <Paper className={classes.paper}>XP earned this level: <strong className={classes.statValue}>{shown.allstats.levelXpGained}</strong></Paper>
              </Grid>        
              <Grid item xs={2}>
                  <Paper className={classes.paper}>XP needed to level up: <strong className={classes.statValue}>{shown.allstats.levelXpRemainder}</strong></Paper>
              </Grid>        
              <Grid item xs={2}>
                  <Paper className={classes.paper}>To next Level: <strong className={classes.statValue}>{percentageToLevel.toFixed(2)}%</strong></Paper>
              </Grid>        
              <Grid item xs={4}>
                <BorderLinearProgress variant="determinate" value={percentageCompleted} />
              </Grid>
            </Grid>
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
  );
};
