import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
      height: 55
      
    },
  },
}));




export default function BasicTextFields(props) {
  const classes = useStyles();

   return (
    <form className={classes.root} noValidate autoComplete="off"  onSubmit={(event) => event.preventDefault()}>
      <TextField id="outlined-basic" label="GAMER ID" variant="outlined" value={props.value} onChange={props.onChange}/>
      <button onClick={props.onClick}/>
    </form>
  ); 
  
}


