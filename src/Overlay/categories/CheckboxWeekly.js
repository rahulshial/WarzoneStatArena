import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxWeekly(props) {

  const { checked, weeklyData, selectedStat } = props

  const [state, setState] = useState({
    avgLifeTime: false,
    damageDone: false,
    damageTaken: false,
    gulagKills: false,
    gulagDeaths: false,
    executions: false,
    timePlayed: false,
    headshots: false,
    assists: false,
    deaths: false,
    distanceTraveled: false,
    headshotPercentage: false,
    kdRatio: false,
    killsPerGame: false,
    matchesPlayed: false,
    buyStationPurchase: false,
    missionsPickedUp: false,
    vehiclesDestroyed: false,
    knockedPlayersKilled: false,
    revives: false,
    teamsWiped: false,
    totalScore: false,
    scorePerMinute: false,
    wallBangs: false,
  });




  const handleChange = (e) => {

    setState(prev => ({
      ...prev,
      [e.target.id]: e.target.checked
    }))
    selectedStat(e.target.value, e.target.name, e.target.checked, e.target.id)
  };


  const avgLifeTime = weeklyData.weeklyData.all.properties.avgLifeTime.toFixed(2);
  const damageDone = weeklyData.weeklyData.all.properties.damageDone;
  const damageTaken = weeklyData.weeklyData.all.properties.damageTaken;
  const gulagKills = weeklyData.weeklyData.all.properties.gulagKills;
  const gulagDeaths = weeklyData.weeklyData.all.properties.gulagDeaths;
  const executions = weeklyData.weeklyData.all.properties.executions;
  const timePlayed = weeklyData.weeklyData.all.properties.timePlayed;
  const headshots = weeklyData.weeklyData.all.properties.headshots;
  const assists = weeklyData.weeklyData.all.properties.assists;
  const deaths = weeklyData.weeklyData.all.properties.deaths;
  const distanceTraveled = weeklyData.weeklyData.all.properties.distanceTraveled.toFixed(2);
  const headshotPercentage = weeklyData.weeklyData.all.properties.headshotPercentage.toFixed(2) * 100;
  const kdRatio = weeklyData.weeklyData.all.properties.kdRatio.toFixed(2);
  const killsPerGame = weeklyData.weeklyData.all.properties.killsPerGame.toFixed(2);
  const matchesPlayed = weeklyData.weeklyData.all.properties.matchesPlayed;
  const buyStationPurchase = weeklyData.weeklyData.all.properties.objectiveBrKioskBuy;
  const missionsPickedUp = weeklyData.weeklyData.all.properties.objectiveBrMissionPickupTablet;
  const vehiclesDestroyed = weeklyData.weeklyData.all.properties.objectiveDestroyedVehicleMedium;
  const knockedPlayersKilled = weeklyData.weeklyData.all.properties.objectiveLastStandKill;
  const revives = weeklyData.weeklyData.all.properties.objectiveReviver;
  const teamsWiped = weeklyData.weeklyData.all.properties.objectiveTeamWiped;
  const totalScore = weeklyData.weeklyData.all.properties.score;
  const scorePerMinute = weeklyData.weeklyData.all.properties.scorePerMinute.toFixed(2);
  const wallBangs = weeklyData.weeklyData.all.properties.wallBangs;

  return (
    <FormGroup row className="category-two-selects">
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.avgLifeTime}
            onChange={handleChange}
            name="Average Lifetime"
            color='secondary'
            value={avgLifeTime}
            id="avgLifeTime"
          />
        }
        label="Average Lifetime"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.damageDone}
            onChange={handleChange}
            name="Damage Done"
            color='secondary'
            value={damageDone}
            id="damageDone"
          />
        }
        label="Damage Done"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.damageTaken}
            onChange={handleChange}
            name="Damage Taken"
            color='secondary'
            value={damageTaken}
            id="damageTaken"
          />
        }
        label="Damage Taken"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.gulagKills}
            onChange={handleChange}
            name="Gulag Kills"
            color='secondary'
            value={gulagKills}
            id="gulagKills"
          />
        }
        label="Gulag Kills"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.gulagDeaths}
            onChange={handleChange}
            name="Gulag Deaths"
            color='secondary'
            value={gulagDeaths}
            id="gulagDeaths"
          />
        }
        label="Gulag Deaths"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.executions}
            onChange={handleChange}
            name="Executions"
            color='secondary'
            value={executions}
            id="executions"
          />
        }
        label="Executions"
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
            checked={state.headshots}
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
            Checkbox
            checked={state.assists}
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
            checked={state.distanceTraveled}
            onChange={handleChange}
            name="Distance Traveled"
            color='secondary'
            value={distanceTraveled}
            id="distanceTraveled"
          />
        }
        label="Distance Traveled"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.headshotPercentage}
            onChange={handleChange}
            name="Headshot Percentage"
            color='secondary'
            value={headshotPercentage}
            id="headshotPercentage"
          />
        }
        label="Headshot %"
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
            checked={state.killsPerGame}
            onChange={handleChange}
            name="AVG KPG"
            color='secondary'
            value={killsPerGame}
            id="killsPerGame"
          />
        }
        label="Average KPG"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.matchesPlayed}
            onChange={handleChange}
            name="Matches Played"
            color='secondary'
            value={matchesPlayed}
            id="matchesPlayed"
          />
        }
        label="Matches Played"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.buyStationPurchase}
            onChange={handleChange}
            name="Purchases"
            color='secondary'
            value={buyStationPurchase}
            id="buyStationPurchase"
          />
        }
        label="Buy Station Purchases"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.missionsPickedUp}
            onChange={handleChange}
            name="Missions Gathered"
            color='secondary'
            value={missionsPickedUp}
            id="missionsPickedUp"
          />
        }
        label="Missions Gathered"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.vehiclesDestroyed}
            onChange={handleChange}
            name="Vehicles Destroyed"
            color='secondary'
            value={vehiclesDestroyed}
            id="vehiclesDestroyed"
          />
        }
        label="Vehicles Destroyed"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.knockedPlayersKilled}
            onChange={handleChange}
            name="Knocked Kills"
            color='secondary'
            value={knockedPlayersKilled}
            id="knockedPlayersKilled"
          />
        }
        label="Knocked Kills"
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
            checked={state.teamsWiped}
            onChange={handleChange}
            name="Teams Wiped"
            color='secondary'
            value={teamsWiped}
            id="teamsWiped"
          />
        }
        label="Teams Wiped"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.totalScore}
            onChange={handleChange}
            name="Total Score"
            color='secondary'
            value={totalScore}
            id="totalScore"
          />
        }
        label="Total Score"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.wallBangs}
            onChange={handleChange}
            name="Wall Bangs"
            color='secondary'
            value={wallBangs}
            id="wallBangs"
          />
        }
        label="Wall Bangs"
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
    </FormGroup>
  )
}
