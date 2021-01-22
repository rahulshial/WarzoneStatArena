import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function Overview(props) {
  const classes = useStyles();
  const { test, shown } = props
  console.log(shown);
  const fullLevel = shown.allstats.levelXpGained + shown.allstats.levelXpRemainder;
  const percentageToLevel = shown.allstats.levelXpRemainder / fullLevel * 100
  const percentageCompleted = 100 - percentageToLevel;
  const timePlayedTotal = shown.allstats.lifetime.mode.br.properties.timePlayed
  const bull = <span className={classes.bullet}>•</span>;

  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= percentageCompleted ? 10 : prevProgress + 10));
    }, 450);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>

    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1>{shown.allstats.username} stats on platform: {shown.allstats.platform}</h1>
          </Typography>
          <Typography >
            <h2>{bull}Time Played: {timePlayedTotal}</h2>
          </Typography>
          <Typography >
            <h2>{bull}Level: {shown.allstats.level}</h2>
          </Typography>
          <Typography >
            <h2>{bull}XP earned this level: {shown.allstats.levelXpGained}</h2>
          </Typography>
          <Typography >
            <h2>{bull}XP needed to level up: {shown.allstats.levelXpRemainder}</h2>
          </Typography>
          <Typography >
            <h2>{bull}To next level: {percentageToLevel.toFixed(2)}%</h2>
          </Typography>
          <BorderLinearProgress variant="determinate" value={progress} />
        </CardContent>
      </Card>
      <CircularProgress
            size={fullLevel}
            value={shown.allstats.levelXpRemainder}
            thickness={20}
            variant="static"
            color="primary"
          />
    </div>
    </>
  )
}
