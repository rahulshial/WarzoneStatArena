import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import battlenet from "./img/battlenet-icon.png";
import xbox from "./img/xbox2.png";
import psn from "./img/psn-icon.png";
import Mw from "./img/Cod-icon.png";
import "./checkbox.css"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
    paddingRight:"20px",
    width:400,
    '& > *': {
      // margin: theme.spacing(1),
      height: 45,
      marginRight:"30px",
      marginBottom:"10px",
      
    },
   
    
  },
  button: {
    
    "&:focus": {
      background:"#ffd369",
    }
  },
  img: {
    width: "30px",
    height:"30px"
    
    
  }
}));

export default function GroupSizesColors(props) {
  const classes = useStyles();
  function test1 (platform) {
    props.onClick(platform);
    return;
  }

  

  
  //console.log(platform);
  return (
    <div className={classes.root}>
      <ButtonGroup size="large" style={{backgroundColor:"#fff"}} aria-label="large outlined primary button group" >
        {/* give back "psn" */}
        <Button className={classes.button} onClick= {()=> test1("psn")}>
          <img className={classes.img}  src={psn} alt=""/>
        </Button> 
        {/* give back "acti" */}
        <Button  className={classes.button} onClick= {()=> test1("acti")}>
          <img  className={classes.img} src={Mw} alt=""/>
        </Button>
        {/* give back "battlenet" */}
        <Button  className={classes.button} onClick= {()=> test1("battle")} >
          <img  className={classes.img} src={battlenet} alt=""/>
        </Button>
        {/* give back "xbox" */}
        <Button  className={classes.button} onClick= {()=> test1("xbox")} >
          <img className={classes.img} src={xbox} alt=""/>
        </Button>
      </ButtonGroup>
    </div>
  );
}