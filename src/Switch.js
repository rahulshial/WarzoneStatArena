import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SwitchesSize(props) {
    return (
      <FormGroup>
        <FormControlLabel
          control={<Switch size="small" checked={props.checked} onChange={props.onChange} />}
          label="Small"
        />
      </FormGroup>
    );
  }
