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




export default function BasicTextFields() {
  const classes = useStyles();
  const [name, setName] = useState("")
  //console.log(name);
  function hello (name) {
    let nickname = name.replace("#", "%23")
    console.log(name);
   /*  axios
        .get(`http://localhost:8080/stats/${nickname}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        }) */
        return nickname
  }
  
  

   return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="GAMER ID" variant="outlined" onChange= {(event) => setName(event.target.value)} />
      <button onClick={hello}/>
    </form>
  ); 
  
}


