import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: 'center',
    color: '#DEA01E',
    "& > *": {
      marginLeft: theme.spacing('auto'),
      width: theme.spacing(111),
      height: theme.spacing(20),
    }
  },
  card: {
    backgroundColor: '#151518',
    marginTop: '15px',
  },
  checkBox: {
    color: '#dea01e',
  },
  labels: {
    color: '#dadada'
  },
  Muichecked: {
    color: '#dadada'
  }
}));

export default function CheckboxCategories(props) {
  const { size, selectedStat, gameModes } = props

  const classes = useStyles();

  const [statCount, setStatCount] = useState(0);

  const [maxReached, setMaxReached] = useState(false);

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

  useEffect(() => {
    setStatCount(Object.values(state).filter(item => item).length)
  }, [state])

  useEffect(() => {
    setMaxReached(statCount >= size)
  }, [statCount])


  const handleChange = (e) => {

    // When a checkbox is selected we set the state of the check box to true and we call the function SelectedStat
    // We pass some values to show on the creation page and for when we create the overlay of what data to show!

    // DO Something in here so when the max amount of check boxes for small or large.. Then 
    // Disable the rest of the buttons...

    setState(prev => ({
      ...prev,
      [e.target.id]: e.target.checked
    }))
    selectedStat(e.target.value, e.target.name, e.target.checked, e.target.id)

  }





  // Variables for game modes.... SPECIFICALLY JUST WARZONE!!!!
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
            classes={{
              label: classes.labels,
            }}
            control={
              <Checkbox
                classes={{
                  checked: classes.checkBox,
                  colorSecondary: classes.checkBox,
                }}
                checked={state.contracts}
                onChange={handleChange}
                color='secondary'
                name="Contracts Completed"
                disabled={!state.contracts && maxReached}
                value={contracts}
                id="contracts"
              />
            }
            label="Contracts Completed"
          />


          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <Checkbox
                checked={state.deaths}
                onChange={handleChange}
                name="Deaths"
                disabled={!state.deaths && maxReached}
                value={deaths}
                id="deaths"
              />
            }
            label="Deaths"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <Checkbox
                classes={{
                  colorPrimary: classes.checkBox,

                }}
                checked={state.downs}
                onChange={handleChange}
                name="Downed Players"
                disabled={!state.downs && maxReached}
                value={downs}
                id="downs"
              />
            }
            label="Downed Players"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <Checkbox
                checked={state.gamesPlayed}
                onChange={handleChange}
                name="Games Played"
                disabled={!state.gamesPlayed && maxReached}
                color='secondary'
                value={gamesPlayed}
                id="gamesPlayed"
              />
            }
            label="Games Played"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.kdRatio}
                onChange={handleChange}
                name="KDR"
                disabled={!state.kdRatio && maxReached}
                color='secondary'
                value={kdRatio}
                id="kdRatio"
              />
            }
            label="KD Ratio"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.kills}
                onChange={handleChange}
                name="Kills"
                disabled={!state.kills && maxReached}
                color='secondary'
                value={kills}
                id="kills"
              />
            }
            label="Kills"
          />


          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.revives}
                onChange={handleChange}
                name="Revives"
                disabled={!state.revives && maxReached}
                color='secondary'
                value={revives}
                id="revives"
              />
            }
            label="Revives"
          />



          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.score}
                onChange={handleChange}
                name="Score"
                disabled={!state.score && maxReached}
                color='secondary'
                value={score}
                id="score"
              />
            }
            label="Total Score"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.scorePerMinute}
                onChange={handleChange}
                name="Score Per/Min"
                disabled={!state.scorePerMinute && maxReached}
                color='secondary'
                value={scorePerMinute}
                id="scorePerMinute"
              />
            }
            label="Score Per Minute"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.timePlayed}
                onChange={handleChange}
                name="Time Played"
                disabled={!state.timePlayed && maxReached}
                color='secondary'
                value={timePlayed}
                id="timePlayed"
              />
            }
            label="Time Played"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.topFive}
                onChange={handleChange}
                name="Top 5"
                disabled={!state.topFive && maxReached}
                color='secondary'
                value={topFive}
                id="topFive"
              />
            }
            label="Top 5 Placements"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.topTen}
                onChange={handleChange}
                name="Top 10"
                disabled={!state.topTen && maxReached}
                color='secondary'
                value={topTen}
                id="topTen"
              />
            }
            label="Top 10 Placements"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.topTwentyFive}
                onChange={handleChange}
                name="Top 25"
                disabled={!state.topTwentyFive && maxReached}
                color='secondary'
                value={topTwentyFive}
                id="topTwentyFive"
              />
            }
            label="Top 25 Placements"
          />
          <FormControlLabel
            classes={{
              label: classes.labels,
            }}
            control={
              <
                Checkbox
                checked={state.wins}
                onChange={handleChange}
                name="Wins"
                disabled={!state.wins && maxReached}
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
