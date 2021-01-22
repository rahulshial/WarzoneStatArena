import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/ArrowForwardIosRounded';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
      marginRight: 0,
      height: 55,
      backgroundColor: "#fff",
      color:"#ffd369"
      
    },
  },
 
  button: {
    margin: theme.spacing(1),
    width: 50,
    marginLeft:0,
    color:"#383d44",
    backgroundColor: "#ffd369",
  },
}));




export default function BasicTextFields(props) {
  const classes = useStyles();

   return (
    <form className={classes.root} noValidate autoComplete="on"  onSubmit={(event) => event.preventDefault()}>
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