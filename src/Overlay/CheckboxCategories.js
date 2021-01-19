import React from 'react'

export default function CheckboxCategories(props) {
  const {selectedStat} = props
  return (
    <div>
        <input type="checkbox" id="stat1" name="stat1" value="avgLifeTime" isChecked='false' onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat1"> Average Lifetime </label><br />

        <input type="checkbox" id="stat2" name="stat2" value="damageDone" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat2"> Damage Done </label><br />

        <input type="checkbox" id="stat3" name="stat3" value="damageTaken" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat3"> damageTaken</label><br />

        <input type="checkbox" id="stat4" name="stat4" value="gulagKills" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat4"> gulagKills</label><br />

        <input type="checkbox" id="stat5" name="stat5" value="gulagDeaths" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat5"> gulagDeaths</label><br />

        <input type="checkbox" id="stat6" name="stat6" value="executions" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat6"> executions</label><br />

        <input type="checkbox" id="stat7" name="stat7" value="timePlayed" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked) }}></input>
        <label for="stat7"> timePlayed</label><br />

        <input type="checkbox" id="stat8" name="stat8" value="headshots" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat8"> headshots</label><br />

        <input type="checkbox" id="stat9" name="stat9" value="assists" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat9"> assists</label><br />

        <input type="checkbox" id="stat10" name="stat10" value="deaths" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat10"> deaths</label><br />

        <input type="checkbox" id="stat11" name="stat11" value="distanceTraveled" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat11"> distanceTraveled</label><br />

        <input type="checkbox" id="stat12" name="stat12" value="headshotPercentage" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat12"> headshotPercentage</label><br />

        <input type="checkbox" id="stat13" name="stat13" value="kdRatio" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat13"> kdRatio</label><br />

        <input type="checkbox" id="stat14" name="stat14" value="killsPerGame" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat14"> killsPerGame</label><br />

        <input type="checkbox" id="stat15" name="stat15" value="matchesPlayed" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat15"> matchesPlayed</label><br />

        <input type="checkbox" id="stat16" name="stat16" value="objectiveBrKioskBuy" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat16"> buyStationPurchase</label><br />

        <input type="checkbox" id="stat17" name="stat17" value="objectiveBrMissionPickupTablet" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat17"> missionsPickedUp</label><br />

        <input type="checkbox" id="stat18" name="stat18" value="objectiveDestroyedVehicleMedium" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat18"> vehiclesDestroyed</label><br />

        <input type="checkbox" id="stat19" name="stat19" value="objectiveLastStandKill" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat19"> knocked Players Killed</label><br />

        <input type="checkbox" id="stat20" name="stat20" value="revives" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat20"> revives</label><br />

        <input type="checkbox" id="stat21" name="stat21" value="teamsWiped" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat21"> teamsWiped</label><br />

        <input type="checkbox" id="stat22" name="stat22" value="totalScore" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat22"> totalScore</label><br />

        <input type="checkbox" id="stat23" name="stat23" value="scorePerMinute" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat23"> scorePerMinute</label><br />

        <input type="checkbox" id="stat24" name="stat24" value="wallBangs" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}}></input>
        <label for="stat24"> wallBangs</label><br />

        <input type="checkbox" id="stat24" name="stat24" value="knockedPlayers" onChange={(e) => { selectedStat(e.target.value, e.target.id, e.target.checked)}} ></input>
        <label for="stat24"> knockedPlayers</label><br />
    </div>
  )
};
