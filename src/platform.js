import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import battlenet from "./img/battlenet-icon.png";
import xbox from "./img/xbox2.png";
import psn from "./img/psn-icon.png";
import Mw from "./img/Cod-icon.png";
import "./checkbox.css"
import { BackgroundColor } from 'chalk';


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
      width: 48,
    }
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();
  const [platform, setPlatform] = useState("");
  console.log(platform);
  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button onClick= {(event) => setPlatform("psn")}>
          <img className="img" src={psn}/>
        </Button>
        <Button  onClick= {(event) => setPlatform("activi")}>
          <img  className="img" src={Mw}/>
        </Button>
        <Button onClick= {(event) => setPlatform("battlenet")}>
          <img  className="img" src={battlenet}/>
        </Button>
        <Button onClick= {(event) => setPlatform("xbox")}>
          <img className="img" src={xbox}/>
        </Button>
      </ButtonGroup>
    </div>
  );
}