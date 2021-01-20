import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import codLogo from "../img/cod-logo.png"
import Button from '@material-ui/core/Button';
import twitch from "../img/twitch.png";
import BasicTextFields from "../textField";
import GroupSizesColors from "../platform";
import RecipeReviewCard from "../news";
import EnhancedTable from "../leaderboard";
import EnhancedTable1 from "../weeklyLeaderboard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0
  },
  paper: {
    margin:0,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    height: 500,
    background: "lightblue" ,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",


    
  },
  shoot: {
    background: '#a970ff',
    borderRadius: 3,
    border: 0,
    color: "white",
    fontWeight: 'bold',
    fontSize:'22px',
    fontFamily:'Lucidatypewriter, monospace',
    width: '400px',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  img: {
    height: 40,
    width: 45,
    paddingLeft: 10,
    
  },
  gameId: {
    display: "flex",
    justifyContent: "center"

  },
  title: {
    fontSize: 40,
    marginBottom: 400
    
  }
}));


export default function Home({name, setName, setGamerData, setPlatform}) {
  const classes = useStyles();

  

  // const {
  //   weapons1,
  //   setWeapon
  // } = useApplicationData();

  // console.log(weapons1.weapons.weapon_assault_rifle);
  // console.log(weapons1.weeklyData.properties);
  //   // if (weapons1.weapons.weapon_assault_rifle) {
  //   //   const gunstat = weapons1.weapons.weapon_assault_rifle.iw8_ar_akilo47.properties.kills
  //   //   return gunstat
  //   // }
  //   let weeklyKills = 0
  //   let weeklyDeaths = 0
  //   let weeklyKdRatio = 0
  //   let weeklyMatchesPlayed = 0
  //   if (weapons1.weeklyData.properties) {
  //     console.log(weapons1.weeklyData.properties["kills"]);
  //      weeklyKills = weapons1.weeklyData.properties.kills
  //      weeklyDeaths = weapons1.weeklyData.properties.deaths
  //      weeklyKdRatio = weapons1.weeklyData.properties.kdRatio
  //      weeklyMatchesPlayed = weapons1.weeklyData.properties.matchesPlayed
  //   }
  

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <div>
              <img src={codLogo} alt=""/>
            </div>
            <div>
            <div>
              <p>
                <h1>
                  Modern Warfare Stats
                </h1>
                <br/>
              </p>
            </div>
            <div className={classes.gameId}>
              <GroupSizesColors
                onClick={setPlatform}
              />
              
            </div>
            <BasicTextFields 
                value={name}
                onChange={setName}
                onClick={setGamerData}
              />
            <div>
              <Button className={classes.shoot} href= "http://localhost:8080/auth/twitch/callback">
                Login With Twitch
                <img className={classes.img} src={twitch} alt="" />
              </Button>
            </div>
            </div>
            
            
            
          
          
          </Paper>
        </Grid>
        
          
          
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <p className={classes.title}>Leaderboard</p>
          <EnhancedTable
            // weeklyKills = {weeklyKills}
            // weeklyDeaths = {weeklyDeaths}
            // weeklyKdRatio = {weeklyKdRatio}
            // weeklyMatchesPlayed = {weeklyMatchesPlayed}
          />
          <EnhancedTable1/>
          </Paper>
        </Grid>
        
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <RecipeReviewCard 
              url="https://youtu.be/XgCtsrElVn8"
              title='Call of Duty: Warzone Supposedly Has a New "Broken" OP Gun'
              avatar="RS"
              subheader="charlieintel.com"
              link="https://charlieintel.com/faze-swagg-reveals-a-gun-better-than-dmr-14-in-warzone/75052/"
            />
            <RecipeReviewCard
              url='https://www.youtube.com/watch?v=nEJD_q21vCM'
              title="FaZe Swagg reveals a gun better than DMR-14 in Warzone"
              avatar="MT"
              subheader="charlieintel.com"
              link="https://charlieintel.com/faze-swagg-reveals-a-gun-better-than-dmr-14-in-warzone/75052/"
            />
          </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}





