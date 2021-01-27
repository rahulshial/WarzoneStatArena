// react import
import React from "react";
// material UI imports
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

// local image and styles import
import battlenet from "../img/battlenet-icon.png";
import xbox from "../img/xbox2.png";
import psn from "../img/psn-icon.png";
import Mw from "../img/Cod-icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingRight: "20px",
    width: 400,
    "& > *": {
      marginTop: theme.spacing(6),
      height: 45,
      marginRight: "30px",
      marginBottom: "10px",
    },
  },
  button: {
    "&:focus": {
      background: "#dea01e",
    },
  },
  img: {
    width: "30px",
    height: "30px",
  },
  platform: {
    backgroundColor: "#fff",
  },
}));

export default function PlatformButtons(props) {
  const classes = useStyles();

  const platfromSelector = (platform) => {
    props.onClick(platform);
    return;
  }

  return (
    <div className={classes.root}>
      <ButtonGroup
        size="large"
        className={classes.platform}
        aria-label="large outlined primary button group"
      >
        {/* give back "psn" */}
        <Button
          className={classes.button}
          onClick={() => platfromSelector("psn")}
        >
          <img className={classes.img} src={psn} alt="" />
        </Button>
        {/* give back "acti" */}
        <Button
          className={classes.button}
          onClick={() => platfromSelector("acti")}
        >
          <img className={classes.img} src={Mw} alt="" />
        </Button>
        {/* give back "battlenet" */}
        <Button
          className={classes.button}
          onClick={() => platfromSelector("battle")}
        >
          <img className={classes.img} src={battlenet} alt="" />
        </Button>
        {/* give back "xbox" */}
        <Button
          className={classes.button}
          onClick={() => platfromSelector("xbl")}
        >
          <img className={classes.img} src={xbox} alt="" />
        </Button>
      </ButtonGroup>
    </div>
  );
}
