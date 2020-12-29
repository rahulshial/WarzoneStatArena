import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
      height: 55
      
    },
  },
}));



export default function BasicTextFields() {
  const classes = useStyles();
  const [name, setName] = useState("");
  console.log(name);
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="GAMER ID" variant="outlined" onChange= {(event) => setName(event.target.value)} />
    </form>
  );
  
}