import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckboxGuns from './categories/CheckboxGuns';
import CheckboxWeekly from './categories/CheckboxWeekly';
import CheckboxLifetime from './categories/CheckboxLifetime';

export default function CheckboxCategories(props) {
  const { checked, selectedStat, weeklyData, lifetimeData, gunData } = props

  const [state, setState] = useState({
    weeklyStats: false,
    lifetimeStats: false,
    guns: false,
  });


  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.checked 
    });
  };

  return (
    <>
    <div>
      <FormGroup row className="category-selects">
        <FormControlLabel
          control={
            <
              Checkbox checked={state.weeklyStats}
              onChange={handleChange}
              name="weeklyStats"
              color='primary'
            />
          }
          label="Weekly Stats"
        />
        <FormControlLabel
          control={
            <
              Checkbox checked={state.lifetimeStats}
              onChange={handleChange}
              name="lifetimeStats"
              color='primary'
            />
          }
          label="Lifetime Stats"

        />
        <FormControlLabel
          control={
            <
              Checkbox checked={state.guns}
              onChange={handleChange}
              name="guns"
              color='primary'
            />
          }
          label="Gun Stats"
        />
      </FormGroup>
    </div>
    <div>

    {state.weeklyStats ? 
    <CheckboxWeekly
    weeklyData={weeklyData}
    selectedStat={selectedStat}
    checked={checked}
    />:<></>}

    {state.guns ? 
    <CheckboxGuns 
    gunData={gunData} 
    selectedStat={selectedStat}
    />:<></>}

    {state.lifetimeStats ? 
    <CheckboxLifetime 
    lifetimeData={lifetimeData}
    selectedStat={selectedStat}
    />:<></>}

    </div>
    </>
  )
};

{/* <div>
      <input type="checkbox" id="stat1" name="Average Lifetime" value={avgLifeTime} isChecked='false' onChange={(e) => {selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue)}}></input>
      <label for="stat1" name="avgLifeTime"> Average Lifetime </label><br />

      <input type="checkbox" id="stat2" name="Damage Done" value={damageDone} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat2" name="damageDone"> Damage Done </label><br />

      <input type="checkbox" id="stat3" name="Damage Taken" value={damageTaken} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat3" name="damageTaken"> Damage Taken</label><br />

      <input type="checkbox" id="stat4" name="Gulag Kills" value={gulagKills} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat4" name="gulagKills"> Gulag Kills</label><br />

      <input type="checkbox" id="stat5" name="Gulag Deaths" value={gulagDeaths} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat5" name="gulagDeaths"> Gulag Deaths</label><br />

      <input type="checkbox" id="stat6" name="Executions" value={executions} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat6" name="executions"> Executions</label><br />

      <input type="checkbox" id="stat7" name="Time Played" value={timePlayed} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat7" name="timePlayed"> Time Played</label><br />

      <input type="checkbox" id="stat8" name="Head Shots" value={headshots} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat8" name="headshots"> Head Shots</label><br />

      <input type="checkbox" id="stat9" name="Assists" value={assists} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat9" name="assists"> Assists</label><br />

      <input type="checkbox" id="stat10" name="Deaths" value={deaths} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat10" name="deaths"> Deaths</label><br />

      <input type="checkbox" id="stat11" name="Distance Traveled" value={distanceTraveled} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat11" name="distanceTraveled"> Distance Traveled</label><br />

      <input type="checkbox" id="stat12" name="Head Shot %" value={headshotPercentage} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat12" name="headshotPercentage"> Head Shot %</label><br />

      <input type="checkbox" id="stat13" name="KD Ratio" value={kdRatio} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat13" name="kdRatio"> K-D Ratio</label><br />

      <input type="checkbox" id="stat14" name="AVG KPG" value={killsPerGame} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat14" name="killsPerGame"> AVG Kills Per Game</label><br />

      <input type="checkbox" id="stat15" name="Games Played" value={matchesPlayed} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat15" name="matchesPlayed"> Games Played</label><br />

      <input type="checkbox" id="stat16" name="Buy Stations" value={buyStationPurchase} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat16" name="objectiveBrKioskBuy"> Buy Station Purchases</label><br />

      <input type="checkbox" id="stat17" name="Mission Counter" value={missionsPickedUp} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat17" name="objectiveBrMissionPickupTablet"> Missions Grabbed</label><br />

      <input type="checkbox" id="stat18" name="Vehicles Destroyed" value={vehiclesDestroyed} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat18" name="objectiveDestroyedVehicleMedium"> Vehicles Destroyed</label><br />

      <input type="checkbox" id="stat19" name="Knocked Kills" value={knockedPlayersKilled} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat19" name="objectiveLastStandKill"> Knocked Players Killed</label><br />

      <input type="checkbox" id="stat20" name="Revives" value={revives} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat20" name="objectiveReviver"> Revives</label><br />

      <input type="checkbox" id="stat21" name="Team Wipes" value={teamsWiped} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat21" name="objectiveTeamWiped"> Team Wipes</label><br />

      <input type="checkbox" id="stat22" name="Weekly Score" value={totalScore} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat22" name="score"> Total Weekly Score</label><br />

      <input type="checkbox" id="stat23" name="AVG SPM" value={scorePerMinute} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat23" name="scorePerMinute"> Score Per Minute</label><br />

      <input type="checkbox" id="stat24" name="Wall Bangs" value={wallBangs} onChange={(e) => { selectedStat(e.target.value, e.target.name, e.target.checked, e.target.nextSibling.attributes[1].nodeValue) }}></input>
      <label for="stat24" name="wallBangs"> Wall Bangs</label><br />

    </div> */}