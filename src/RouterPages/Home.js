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
import backgournd from "../img/warzone8.jpg";
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
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    height: 500,
    background: "lightblue" ,
    display: "flex",
    justifyContent: "space-between"

    
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

  }
}));

/* function click () {
  Axios.post("http://localhost:3000/auth/twitch/callback", (req, res) => {
    res.redirect("http://localhost:3000/auth/twitch/callback");
  })
} */

export default function Home({name, setName, nickname, yoo, setPlatform}) {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper} >
          <p>
            <h1>
              Welcome
            </h1>
            <br/>
            <h2>
              to StatSite
            </h2>
          </p>
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
          <Button className={classes.shoot} href= "http://localhost:3000/auth/twitch/callback">
            Login With Twitch
            <img className={classes.img} src={twitch}/>
          </Button>
          
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <EnhancedTable/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <EnhancedTable/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}><RecipeReviewCard/></Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}




