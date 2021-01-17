import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from "../img/trainstation-weapon.jpeg";
import image1 from "../img/trainstation-secondary.png";
import drop from "../img/droped.jpeg";
import guned from "../img/loadout.jpg";
import ruled from "../img/ruled.jpg";
import mine from "../img/mine1.png";
import codLogo from "../img/cod-logo.png"
import Button from '@material-ui/core/Button';
import axios from 'axios';
import twitch from "../img/twitch.png";
import BasicTextFields from "../textField";
import GroupSizesColors from "../platform";
import RecipeReviewCard from "../news";
import EnhancedTable from "../leaderboard";


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
}));

/* function click () {
  Axios.post("http://localhost:3000/auth/twitch/callback", (req, res) => {
    res.redirect("http://localhost:3000/auth/twitch/callback");
  })
} */

export default function Home({name, setName, nickname, setPlatform}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
            <div>
              <img src={codLogo}/>
              
            </div>
            <div>
            <div>
              <p>
                <h1>
                  Modern Warfare Stats
                </h1>
                <br/>
                <h2>
                  
                </h2>
              </p>
            </div>
            <div className={classes.gameId}>
              <GroupSizesColors
                onClick={setPlatform}
              />
              <BasicTextFields 
                value={name}
                onChange={setName}
                onClick={nickname}
              />
            </div>
            <div>
              <Button className={classes.shoot} href= "http://localhost:3000/auth/twitch/callback">
                Login With Twitch
                <img className={classes.img} src={twitch}/>
              </Button>
            </div>
            </div>
            
            
            
          
          
          </Paper>
        </Grid>
        
          
          
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <EnhancedTable/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <EnhancedTable/>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <RecipeReviewCard 
              url="https://youtu.be/XgCtsrElVn8"
              title='Call of Duty: Warzone Supposedly Has a New "Broken" OP Gun'
              avatar="AB"
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





