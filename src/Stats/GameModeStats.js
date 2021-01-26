/** React component imports */
import React from 'react'

/** Material UI Imports */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/** Local Imports */
import '../stats.css';
import gunDataObj from '../helpers/gunData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
    fontSize: '24px',
  },
  paperMode: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "#dea01e",
    backgroundColor: "#565666",
    fontSize: 20
  },
  paperStat: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
    borderLeft: '2px solid',
  },
  statValue: {
    color: "#dadada",
  },
}));

export default function GameModeStats(props) {
  const classes = useStyles();
  const { shown } = props;
  const topRow = [];

  
  for (const stat in shown) {
    topRow.push(shown[stat].properties);
  };

  return topRow.map((statRow, index) => {
    const loopGameStats = () => {
      const returnGameStats = [];
      if(statRow) {
        for (const stat in statRow) {
          if(statRow[stat] % 1 > 0) {
            returnGameStats.push(<Grid item xs={2}>
              <Paper className={classes.paperStat}>{gunDataObj.gunStatTitle[stat]}: <strong className={classes.statValue}>{statRow[stat].toFixed(2)}</strong></Paper>
              </Grid>);
          } else {
            returnGameStats.push(<Grid item xs={2}>
              <Paper className={classes.paperStat}>{gunDataObj.gunStatTitle[stat]}: <strong className={classes.statValue}>{statRow[stat]}</strong></Paper>
              </Grid>);
            };
        };
        return returnGameStats; 
      };
    };

    return (
        <div className='game-modes' >
          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paperMode} variant='outlined'><strong>{gunDataObj.modes[index].toUpperCase()}</strong>:</Paper>                    
              </Grid>
              <Grid container spacing={2}>
                {loopGameStats()}
              </Grid>
            </Grid>
            <br></br>
            <br></br>
          </div>  
        </div>
    );
  });
};
