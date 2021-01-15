import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/ArrowForwardIosRounded';
import axios from "axios";
import { BorderColor } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginRight: 0,
      height: 55
      
    },
  },
 
  button: {
    margin: theme.spacing(1),
    width: 40,
    marginLeft:0,
    backgroundColor: "transparent",
  },
}));




export default function BasicTextFields(props) {
  const classes = useStyles();

   return (
    <form className={classes.root} noValidate autoComplete="off"  onSubmit={(event) => event.preventDefault()}>
      <TextField id="outlined-basic" label="GAMER ID" variant="outlined" value={props.value} onChange={props.onChange}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.onClick}
      >
         <ArrowIcon fontSize="inherit" />
      </Button>
      
    </form>
  ); 
  
}