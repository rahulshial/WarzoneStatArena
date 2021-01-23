import React from 'react'

/** Material UI Imports */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/** Local imports */
import gunDataObj from '../helpers/gunData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18;',
    elevation: 24,
    cursor: 'pointer'
  },
}));

export default function StatCard(props) {
  const classes = useStyles();
  const { image, gunName, onAdd, cat, topRow, statsRow } = props;
  const gunLongName = gunDataObj.gunNameObj[gunName]
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Paper className={classes.paper} variant='outlined' onClick={() => onAdd(gunName, image, cat)}>{gunLongName}</Paper>                    
            </Grid>
          </Grid>
          <img className="gun-icon" src={image} alt="" />
          <div className="content">
            <div className='gun-flex'>
            </div>
          </div>
        </div>
        <div className="face face2">

          <table className='gun-item-table'>

            <tr>
              {topRow}
            </tr>
            <tr>
            {statsRow}

            </tr>

          </table>
          <div className="achievements">
            <h5>Achievements</h5>
            <hr></hr>
            <div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
