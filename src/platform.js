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
    '& > *': {
      margin: theme.spacing(1),
      height: 55,
      
    },
    '&:focus': {
      background:"red",
    },
    img: {
      width: "45px",
    }
  },
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
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" >
        {/* give back "psn" */}
        <Button onClick= {()=> test1("psn")}>
          <img className="img"  src={psn} alt=""/>
        </Button> 
        {/* give back "acti" */}
        <Button  onClick= {()=> test1("acti")}>
          <img  className="img" src={Mw} alt=""/>
        </Button>
        {/* give back "battlenet" */}
        <Button  onClick= {()=> test1("battle")} >
          <img  className="img" src={battlenet} alt=""/>
        </Button>
        {/* give back "xbox" */}
        <Button  onClick= {()=> test1("xbox")} >
          <img className="img" src={xbox} alt=""/>
        </Button>
      </ButtonGroup>
    </div>
  );
}