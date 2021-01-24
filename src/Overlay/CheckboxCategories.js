import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    "& > *": {
      marginLeft: theme.spacing('auto'),
      width: theme.spacing(111),
      height: theme.spacing(20),
    }
  },
  card: {
    backgroundColor: '#0f0e18',
    marginTop: '15px',
  }
}));

export default function CheckboxCategories(props) {
  const { size, checked, selectedStat, gameModes } = props
  const classes = useStyles();
  const [state, setState] = useState({
    contracts: false,
    deaths: false,
    downs: false,
    gamesPlayed: false,
    kdRatio: false,
    kills: false,
    revives: false,
    score: false,
    scorePerMinute: false,
    timePlayed: false,
    topFive: false,
    topTen: false,
    topTwentyFive: false,
    wins: false,
  });


  const handleChange = (e) => {
    // let overlaySize = 0;
    // if (size === "Large") {
    //   overlaySize = 8;
    // } else {
    //   overlaySize = 4
    // }
    // console.log(Object.keys(checked).length);
    // if (Object.keys(checked).length !== 8) {
    //   setState(prev => ({
    //     ...prev,
    //     [e.target.id]: false
    //   }))
    // }

    setState(prev => ({
      ...prev,
      [e.target.id]: e.target.checked
    }))
    selectedStat(e.target.value, e.target.name, e.target.checked, e.target.id)


  };

  const contracts = gameModes.gameModes.br.properties.contracts
  const deaths = gameModes.gameModes.br.properties.deaths
  const downs = gameModes.gameModes.br.properties.downs
  const gamesPlayed = gameModes.gameModes.br.properties.gamesPlayed
  const kdRatio = gameModes.gameModes.br.properties.kdRatio
  const kills = gameModes.gameModes.br.properties.kills
  const revives = gameModes.gameModes.br.properties.revives
  const score = gameModes.gameModes.br.properties.score
  const scorePerMinute = gameModes.gameModes.br.properties.scorePerMinute
  const timePlayed = gameModes.gameModes.br.properties.timePlayed
  const topFive = gameModes.gameModes.br.properties.topFive
  const topTen = gameModes.gameModes.br.properties.topTen
  const topTwentyFive = gameModes.gameModes.br.properties.topTwentyFive
  const wins = gameModes.gameModes.br.properties.wins

  return (
    <div className={classes.root}>
      <Paper className={classes.card} elevation={25} >
        <FormGroup row className="category-two-selects">
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.contracts}
                onChange={handleChange}
                name="Contracts Completed"
                color='secondary'
                value={contracts}
                id="contracts"
              />
            }
            label="Contracts Completed"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.deaths}
                onChange={handleChange}
                name="Deaths"
                color='secondary'
                value={deaths}
                id="deaths"
              />
            }
            label="Deaths"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.downs}
                onChange={handleChange}
                name="Downed Players"
                color='secondary'
                value={downs}
                id="downs"
              />
            }
            label="Downed Players"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.gamesPlayed}
                onChange={handleChange}
                name="Games Played"
                color='secondary'
                value={gamesPlayed}
                id="gamesPlayed"
              />
            }
            label="Games Played"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.kdRatio}
                onChange={handleChange}
                name="KDR"
                color='secondary'
                value={kdRatio}
                id="kdRatio"
              />
            }
            label="KD Ratio"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.kills}
                onChange={handleChange}
                name="Kills"
                color='secondary'
                value={kills}
                id="kills"
              />
            }
            label="Kills"
          />


          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.revives}
                onChange={handleChange}
                name="Revives"
                color='secondary'
                value={revives}
                id="revives"
              />
            }
            label="Revives"
          />



          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.score}
                onChange={handleChange}
                name="Score"
                color='secondary'
                value={score}
                id="score"
              />
            }
            label="Total Score"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.scorePerMinute}
                onChange={handleChange}
                name="Score Per/Min"
                color='secondary'
                value={scorePerMinute}
                id="scorePerMinute"
              />
            }
            label="Score Per Minute"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.timePlayed}
                onChange={handleChange}
                name="Time Played"
                color='secondary'
                value={timePlayed}
                id="timePlayed"
              />
            }
            label="Time Played"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.topFive}
                onChange={handleChange}
                name="Top 5"
                color='secondary'
                value={topFive}
                id="topFive"
              />
            }
            label="Top 5 Placements"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.topTen}
                onChange={handleChange}
                name="Top 10"
                color='secondary'
                value={topTen}
                id="topTen"
              />
            }
            label="Top 10 Placements"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.topTwentyFive}
                onChange={handleChange}
                name="Top 25"
                color='secondary'
                value={topTwentyFive}
                id="topTwentyFive"
              />
            }
            label="Top 25 Placements"
          />
          <FormControlLabel
            control={
              <
                Checkbox
                checked={state.wins}
                onChange={handleChange}
                name="Wins"
                color='secondary'
                value={wins}
                id="wins"
              />
            }
            label="Wins"
          />
        </FormGroup>
      </Paper>
    </div>
  )
};
