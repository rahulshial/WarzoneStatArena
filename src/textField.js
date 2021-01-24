import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowIcon from '@material-ui/icons/ArrowForwardIosRounded';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 40,
    '& > *': {
      // margin: theme.spacing(1),
      width: '30ch',
      marginRight: 0,
      
      backgroundColor: "#fff",
      color:"#ffd369",

      
    },
  },
 
  button: {
    margin: theme.spacing(1),
    width: 50,
    height: 55,
    marginLeft:"10px",
    color:"#383d44",
    backgroundColor: "#ffd369",
    borderRadius:"10px",
    marginBottom:"10px"
  },
  textfield: {
    marginTop:"5px",
    borderRadius:"10px",
    // height: 40,
  },
}));




export default function BasicTextFields(props) {
  const classes = useStyles();

   return (
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
       <form className={classes.root} noValidate autoComplete="on"  onSubmit={(event) => event.preventDefault()}>
      <TextField label="GAMER ID" variant="outlined"   className={classes.textfield} value={props.value} onChange={props.onChange}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.onClick}
      >
         <ArrowIcon fontSize="inherit" />
      </Button>
      
    </form>
     </div>
    
  ); 
  
}