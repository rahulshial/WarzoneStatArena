import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

/** Material UI Imports */
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/** Local imports */
import '../styles/profile.css'
import ProfileNavBar from '../Profile/ProfileNavBar'
import TrackedGuns from '../Profile/TrackedGuns.js'
import GamerStats from '../Profile/GamerStats';


/** Declare Material UI classes styles */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    textSize: '24px',
  },
  paperButton: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    textSize: '24px',
    cursor: 'pointer',
  },
  paperEmpty: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffd369",
    backgroundColor: '#0f0e18',
  },
}));
  
let compareGamerTag = ''
export default function Profile(props) {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const history = useHistory();

  (Object.keys(cookies).length > 0 ? compareGamerTag = cookies.gamerTagInfo.gamerTag.replace('%23', '#') : compareGamerTag = '');
  const [state, setState] = useState({
    favorites: [],
    gunStats: [],
    achievements: [],
    displayedCards: [],
    weeklyData: [],
    lifetimeData: [],
    compareGamerGuns: [],
    shownTab: 1,
  });

  if ('gamerTagInfo' in cookies) {
    console.log('gamerTagInfo found in : ', cookies);
  } else {
    console.log('gamerTagInfo not found in : ', cookies);
  }

  useEffect(() => {
    const gamerTag = "Nickmercs%2311526";
    const gamerPlatform = "battle";
    if(Object.keys(cookies).length > 0) {
      if('gamerTagInfo' in cookies) {
        const compareGamerTag = cookies.gamerTagInfo.gamerTag;
        const compareGamerPlatform = cookies.gamerTagInfo.gamerPlatform;
        axios.get(`http://localhost:3030/stats/${compareGamerTag}&${compareGamerPlatform}`)
        .then((compareGamerData) => {
          // console.log('PROFILE - Compare Gamer guns: ', compareGamerData);
          console.log('PROFILE - Compare Gamer guns: ', compareGamerData.data[2].guns);
          const compareGamerGuns = [compareGamerData.data[2].guns];
          setState(prev => ({
            ...prev,
            compareGamerGuns: compareGamerGuns
          }))
        })
        .catch(error => {
          console.log('Error fetching Compare Gamer Stats: ', error)
        });
      }
    };
    Promise.all([
      axios.get('http://localhost:3030/trackedstats/trackedfavs'),
      axios.get('http://localhost:3030/achievements'),
      axios.get(`http://localhost:3030/stats/${gamerTag}&${gamerPlatform}`)
    ])
      .then(([favorites, achievements, allData]) => {
        if (allData.data[0].weeklyData !== null) {
          const weeklyStatData = [allData.data[0].weeklyData.all.properties];
          const lifetimeStatData = [allData.data[3].lifetimeData];
          const gunStats = [allData.data[2].guns]
          setState(prev => ({
            ...prev,
            favorites: favorites.data,
            achievements: achievements.data,
            weeklyData: weeklyStatData,
            lifetimeData: lifetimeStatData,
            gunStats: gunStats,
          }));
        } else {
          const lifetimeStatData = [allData.data[3].lifetimeData];
          const gunStats = [allData.data[2].guns]
          setState(prev => ({
            ...prev,
            favorites: favorites.data,
            achievements: achievements.data,
            lifetimeData: lifetimeStatData,
            gunStats: gunStats,
          }));
        };
      })
      .catch(error => {
        console.log("Error fetching Logged User Stats", error);
      });
  }, [state.displayedCards]);

  const deleteStat = (stat) => {
    const cardShown = state.displayedCards.filter(item => item !== stat)
    setState(prev => ({
      ...prev,
      displayedCards: cardShown
    }));
  };
  
  const removeCompare = () => {
    removeCookie('gamerTagInfo', { path: '/' });
    history.go(0);
  };

  const categorySelected = (indexValue) => {
    setState(prev => ({
    ...prev,
    shownTab: indexValue
    }))
  };

  const navBarsToShow = () => {
    if (state.shownTab === 0) {
      return (
        <div className='profile-page-gamer-stats'>
          <GamerStats 
          key={state.weeklyData}
          weeklyData={state.weeklyData}
          lifetimeData={state.lifetimeData}
        />
        </div>
      )
    } else {
      if (state.favorites.length > 0) {
        if(Object.keys(cookies).length > 0) {
          return (
            <div className='tracked-guns'>
              <div className='tracked-guns-header'>
                <br />
                <Grid container spacing={1}>
                  <Grid item xs={7}>
                    <Paper className={classes.paper}>Stats for my favorite Guns</Paper>
                  </Grid>
                  <Grid item xs={5}>
                    <Paper className={classes.paperButton} onClick={() => {removeCompare()}}>Click here to STOP Compare with {compareGamerTag}</Paper>                    
                  </Grid>
                </Grid>
                <br />
              </div>
              <div>
                <TrackedGuns
                key={state.favorites}
                favorites={state.favorites}
                gunStats={state.gunStats}
                displayedCards={state.displayedCards}
                deleteStat={deleteStat}
                achievements={state.achievements}
                compareGamerGuns={state.compareGamerGuns}
                />
              </div>
            </div>
          );  
        } else {
            return (
              <div className='tracked-guns'>
                <div className='tracked-guns-header'>
                  <br />
                  <Grid container spacing={1}>
                    <Grid item xs={7}>
                      <Paper className={classes.paper}>Stats for my favorite Guns</Paper>
                    </Grid>
                    <Grid item xs={5}>
                      <Paper className={classes.paper}>Compare Stats with {compareGamerTag}</Paper>
                    </Grid>
                  </Grid>
                  <br />
                </div>
                <div>
                  <TrackedGuns
                  key={state.favorites}
                  favorites={state.favorites}
                  gunStats={state.gunStats}
                  displayedCards={state.displayedCards}
                  deleteStat={deleteStat}
                  achievements={state.achievements}
                  compareGamerGuns={state.compareGamerGuns}
                  />
                </div>
              </div>
            );  
          }
    } else {
        return (
          <div>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.paperEmpty}>You have no favourited items</Paper>
              </Grid>
            </Grid>
          </div>
        )
      };
    };
  };
  
  return (
    <div>
      <ProfileNavBar
        onSelect={categorySelected}
      />
      {navBarsToShow()}
    </div >
  )
};
