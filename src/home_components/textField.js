// react imports
import React from "react";
// material UI imports
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowIcon from "@material-ui/icons/ArrowForwardIosRounded";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 40,
    "& > *": {
      width: "30ch",
      marginRight: 0,
      backgroundColor: "#fff",
      color: "#dea01e",
    },
  },

  button: {
    margin: theme.spacing(1),
    width: 50,
    height: 55,
    marginLeft: "10px",
    color: "#383d44",
    backgroundColor: "#dea01e",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  input: {
    marginTop: "5px",
    marginBottom:"30%",
    borderRadius: "10px",
  },
  textField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "white",
    marginTop: "8%",
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  if (props.error) {
    return (
      <div>
        <div className={classes.textField}>
          <form
            className={classes.root}
            noValidate
            autoComplete="on"
            onSubmit={(event) => event.preventDefault()}
          >
            <TextField
              label="GAMER ID"
              variant="filled"
              className={classes.input}
              value={props.value}
              onChange={props.onChange}
            />
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
        <div className={classes.errorText}>
          {/* Error Pop Up */}
          <Chip
            icon={<FaceIcon />}
            label={`Incorrect input. If correct input was given, then check your Activision privacy settings.`}
            color="secondary"
            deleteIcon={<DoneIcon />}
          />
        </div>
      </div>
    );
  } else {
    // returning this component without error box
    return (
      <div className={classes.textField}>
        <form
          className={classes.root}
          noValidate
          autoComplete="on"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            label="GAMER ID"
            variant="filled"
            className={classes.input}
            value={props.value}
            onChange={props.onChange}
          />
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
}
