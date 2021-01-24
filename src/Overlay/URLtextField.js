import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '55ch',
  },
}));

export default function URLtextField({url}) {
  const classes = useStyles();
  return (
    <Paper elevation={13}>
      <TextField
        defaultValue={url}
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
    </Paper>
  )
}