import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100ch',
  },
}));

export default function URLtextField(props) {

  const classes = useStyles();
  return (
    <TextField
      defaultValue="http://localhost:3000/Large/sdfsdf/435897879d980"
      className={classes.textField}
      id="outlined-full-width"
      label="URL"
      style={{ margin: 8 }}
      placeholder=""
      helperText="Copy This URL Into Your Browser Software"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}