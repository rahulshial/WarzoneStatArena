import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLifetime(props) {
  const { lifetimeData, selectedStat } = props
  console.log(lifetimeData);
  const [state, setState] = useState({
    accuracy: false,
    assists: false,
    deaths: false,
    kills: false,
    gamesPlayed: false,
    headshots: false,
    hits: false,
    misses: false,
    kdRatio: false,
    timePlayedTotal: false,
    wins: false,
  });

  const handleChange = (e) => {

    setState(prev => ({
      ...prev,
      [e.target.id]: e.target.checked
    }))
    selectedStat(e.target.value, e.target.name, e.target.checked, e.target.id)
  };

  const accuracy = lifetimeData.lifetimeData.accuracy
  const assists = lifetimeData.lifetimeData.assists
  const deaths = lifetimeData.lifetimeData.deaths
  const kills = lifetimeData.lifetimeData.kills
  const gamesPlayed = lifetimeData.lifetimeData.gamesPlayed
  const headshots = lifetimeData.lifetimeData.headshots
  const hits = lifetimeData.lifetimeData.hits
  const misses = lifetimeData.lifetimeData.misses
  const kdRatio = lifetimeData.lifetimeData.kdRatio
  const timePlayedTotal = lifetimeData.lifetimeData.timePlayedTotal
  const wins = lifetimeData.lifetimeData.wins



  return (
    <FormGroup row className="category-two-selects">
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.accuracy}
            onChange={handleChange}
            name="Accuracy"
            color='secondary'
            value={accuracy}
            id="accuracy"
          />
        }
        label="Accuracy"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.assists}
            onChange={handleChange}
            name="Assists"
            color='secondary'
            value={assists}
            id="assists"
          />
        }
        label="Assists"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.deaths}
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
            Checkbox checked={state.kills}
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
            Checkbox checked={state.gamesPlayed}
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
            Checkbox checked={state.headshots}
            onChange={handleChange}
            name="Head Shots"
            color='secondary'
            value={headshots}
            id="headshots"
          />
        }
        label="Head Shots"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.hits}
            onChange={handleChange}
            name="Hits"
            color='secondary'
            value={hits}
            id="hits"
          />
        }
        label="Hits"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.misses}
            onChange={handleChange}
            name="Misses"
            color='secondary'
            value={misses}
            id="misses"
          />
        }
        label="Misses"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.kdRatio}
            onChange={handleChange}
            name="KDR"
            color='secondary'
            value={kdRatio}
            id="kdRatio"
          />
        }
        label="KDR"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.timePlayedTotal}
            onChange={handleChange}
            name="Time Played"
            color='secondary'
            value={timePlayedTotal}
            id="timePlayedTotal"
          />
        }
        label="Time Played"
      />
      <FormControlLabel
        control={
          <
            Checkbox checked={state.wins}
            onChange={handleChange}
            name="wins"
            color='secondary'
            value={wins}
            id="wins"
          />
        }
        label="Wins"
      />
    </FormGroup>

  )
}
