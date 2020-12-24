import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const guns = [
  'AK47',
  'Kilo433',
  'falima',
  'november',
  'sierra12',
  'falpha',
  'FAL',
  'galima',
  'mcharlie',
  'mike4',
  'Kilo433',
  'sierra552',
  'tango21',
  'valpha']


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {guns.map((gun) => (
            <MenuItem >
              {gun}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}


