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
  paperStat: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
  },
}));

export default function GameModeStats(props) {
  const classes = useStyles();
  const { shown } = props
  const topRow = [];

  
  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  }

  return topRow.map((statRow, index) => {
    console.log('Game Modes: ', statRow);
    const loopGameStats = () => {
      const returnGameStats = [];
      if(statRow) {
        for (const stat in statRow) {
          if(statRow[stat] % 1 > 0) {
            returnGameStats.push(<Grid item xs={2}>
              <Paper className={classes.paperStat}>{gunDataObj.gunStatTitle[stat]}: {statRow[stat].toFixed(2)}</Paper>
              </Grid>);
          } else {
            returnGameStats.push(<Grid item xs={2}>
              <Paper className={classes.paperStat}>{gunDataObj.gunStatTitle[stat]}: {statRow[stat]}</Paper>
              </Grid>);
            };
        };
        return returnGameStats; 
      };
    };

    return (
        <div className='game-modes'>
          <div className={classes.root}>
            <br></br>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper className={classes.paper} variant='outlined'><strong>{gunDataObj.modes[index].toUpperCase()}</strong>:</Paper>                    
              </Grid>
              <Grid container spacing={2}>
                {loopGameStats()}
              </Grid>
            </Grid>
          </div>  
        </div>
    )
  });
};

// Object.keys(stat).map((thing) => {
//   titles.push(<td>{gunDataObj.gunStatTitle[thing]}</td>)
//   stats.push(<td>{stat[thing]}</td>)
// })
/*
<h2>{gunDataObj.modes[index]}</h2>
<tr>{titles}</tr>
<tr>{stats}</tr>
*/
/* <h1>{modes[i]}</h1>
<div className="top-row">
  {titles}
</div>
<div className="top-row">
  {stats}
</div> */