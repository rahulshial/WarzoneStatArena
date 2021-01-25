/** React Imports */
import React from 'react';
import axios from 'axios';

/** Material UI Imports */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/** Local Imports */
import '../stats.css';
import StatCard from './StatCard.js';
import gunDataObj from '../helpers/gunData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#191d24',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "black",
    backgroundColor: '#fff',
    fontSize: '0.83em'
  },
}));

export default function GunStats({ shown, gunImgs, gunTab, weapons, gunNavSelected }) {
  const classes = useStyles();
  const topRow = [];
  
  const changeGunCat = () => {
    console.log('In gun stats: ', shown);
  };

  for (const stat in shown) {
    topRow.push(shown[stat].properties)
  };

  const onButtonClick = (gun, img, cat) => {    
    const gunObj = {
      cat: gunTab,
      gun,
      image: img
    };
    
    axios
      .post("http://localhost:3030/trackedstats/addnew", gunObj)
      .then(res => {
        console.log("Gun added to favourite items");
      })
      .catch(err => {
        console.log(err);
      })
  };

  return topRow.map((gun, i) => {
    const titles = [];
    const stats = [];

    Object.keys(gun).map((gunStat, i) => {
      if (gun[gunStat] % 1 > 0) {
        stats.push(
          <Grid item xs={1.5}>
            <Paper className={classes.paper}>{gunDataObj.gunStatTitle[gunStat]}: <strong>{gun[gunStat].toFixed(2)}</strong></Paper>
          </Grid>);
      } else {
        stats.push(
          <Grid item xs={1.5}>
            <Paper className={classes.paper}>{gunDataObj.gunStatTitle[gunStat]}: <strong>{gun[gunStat]}</strong></Paper>
          </Grid>);
      };
    });

    return (
      <>
        <StatCard
          onAdd={onButtonClick}
          gunName={Object.keys(shown)[i]}
          image={gunImgs[Object.keys(shown)[i]]}
          topRow={titles}
          statsRow={stats}
          cat={changeGunCat}
        />
      </>
    );
  });
};