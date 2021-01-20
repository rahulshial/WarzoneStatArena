import React from 'react'

export default function CheckboxCategories(props) {
  const { selectedStat, weeklyData } = props

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

  // console.log(e.target.nextSibling.attributes[1].nodeValue)
  return (
    <div>
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

    </div>
  )
};
