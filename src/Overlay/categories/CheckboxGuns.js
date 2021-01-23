import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxGuns(props) {

  const { gunData, selectedStat } = props

  const [state, setState] = useState({
    weapon_assault_rifle: false,
    weapon_launcher: false,
    weapon_lmg: false,
    weapon_marksman: false,
    weapon_pistol: false,
    weapon_shotgun: false,
    weapon_smg: false,
    weapon_sniper: false,

  });
  console.log(state.weapon_assault_rifle);
  const handleChange = (e) => {
    setState(prev => ({
      [e.target.id]: e.target.checked
    }))
  };

  return (
<>    
    <FormGroup row className="category-two-selects">
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_assault_rifle}
            onChange={handleChange}
            name="Assault Rifles"
            color='secondary'
            id="weapon_assault_rifle"
          />
        }
        label="Assault Rifles"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_launcher}
            onChange={handleChange}
            name="Launchers"
            color='secondary'
            id="weapon_launcher"
          />
        }
        label="Launchers"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_lmg}
            onChange={handleChange}
            name="LMG"
            color='secondary'
            id="weapon_lmg"
          />
        }
        label="LMG'S"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_marksman}
            onChange={handleChange}
            name="Marksman"
            color='secondary'
            id="weapon_marksman"
          />
        }
        label="Marksman Rifles "
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_pistol}
            onChange={handleChange}
            name="Pistols"
            color='secondary'
            id="weapon_pistol"
          />
        }
        label="Pistols"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_shotgun}
            onChange={handleChange}
            name="Shotguns"
            color='secondary'
            id="weapon_shotgun"
          />
        }
        label="Shotguns"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_smg}
            onChange={handleChange}
            name="SMG's"
            color='secondary'
            id="weapon_smg"
          />
        }
        label="SMG's"
      />
      <FormControlLabel
        control={
          <
            Checkbox
            checked={state.weapon_sniper}
            onChange={handleChange}
            name="Snipers"
            color='secondary'
            id="weapon_sniper"
          />
        }
        label="Snipers"
      />
    </FormGroup>
    <h1>categories

    </h1>
    </>
  )
}
