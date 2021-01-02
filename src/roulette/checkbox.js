import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    
    fontSize:300,
    height: 48,
  },
});

export default function SwitchesSize(props) {
  const classes = useStyles();

    return (
      <FormGroup classes={{
        root: classes.root}}>
        <FormControlLabel
          
          control={<Switch checked={props.checked} onChange={props.onChange} />}
          label={props.label}
        />
      </FormGroup>
    );
  }