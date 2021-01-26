import React, { useState } from 'react'
import LargeOverlay from './LargeOverlay'
import SmallOverlay from './SmallOverylay'
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  largeOverlay: {
    width: '655px',
  },
  smallOverlay: {
    width: '500px',
  }
}));

export default function OverlayBar(props) {

  const { overlaySize, weeklyData, lifetimeData, gunData, gameModes } = props

  const classes = useStyles();

  const [state, setState] = useState({
    tmpStat1: ["Example", 33],
    tmpStat2: ["Example", 33],
    tmpStat3: ["Example", 33],
    tmpStat4: ["Example", 33],
    tmpStat5: ["Example", 33],
    tmpStat6: ["Example", 33],
    tmpStat7: ["Example", 33],
    tmpStat8: ["Example", 33],
    selectedStatsObj: {},
    overlayUrl: '',
  })


  // The random generated string is the code for the specific overlay
  const generateRandomString = () => {
    let newId = "";
    const len = 10;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < len; i++) {
      newId += letters[(Math.floor(Math.random() * letters.length))];
    }
    return newId;
  };






  const saveOverlay = () => {

    // Pretty straight forward function!!! When we press " CREATE OVERLAY " this 
    // function will determine if we are on the large or small overlay
    // it will then create and object of information that a user has selected
    // we generate a unique URL FOR THAT SPECIFIC PLAYER... anyone could use the overlay
    // but the stats will only change for that specific player!
    // check "overlayUrlData" for the object we create

    if (overlaySize === 'Small') {
      const uniqueUrlKey = generateRandomString()
      const overlayUrlData = {
        size: overlaySize,
        urlKey: uniqueUrlKey,
        stats: state.selectedStatsObj,
        // Hard coded for userId 1 for right now till we have a functional login working and more users!
        userId: 1,
      }
      axios
        .put(`http://localhost:3030/overlay/create`, overlayUrlData)
        .then((res) => {
          const url = `http://localhost:3000/overlay/show/${res.data}`

          setState(prev => ({
            ...prev,
            overlayUrl: url
          }))
        })
        .catch((err) => {
          console.log("**Error Saving Overlay**");
          console.log(err);
        })

    } else {

      const uniqueUrlKey = generateRandomString()
      const overlayUrlData = {
        size: overlaySize,
        urlKey: uniqueUrlKey,
        stats: state.selectedStatsObj,
        userId: 1,
      }
      axios
        .put(`http://localhost:3030/overlay/create`, overlayUrlData)
        .then((res) => {

          const url = `http://localhost:3000/overlay/show/${res.data}`

          setState(prev => ({
            ...prev,
            overlayUrl: url
          }))
        })
        .catch((err) => {
          console.log("**Error Saving Overlay**");
          console.log(err);
        })
    }
  }




  // Really need a better way of handling all this! its awful to read....
  // when a checkbox is selected it replaces the first available space that has
  // an existing stat with the title "Example" then we set the state of 
  //  state.selectedStatsObj to hold that check boxes name and the value of from the apiName so we can get the value
  // so "Kills:kills" or "Deaths:deaths" "Vehicles Destroyed: objectiveSmallVehiclesDestroyed"
  // when the length of the keys of state.selectedStatsObj is either 4 or 8 we stop allowing stats to be added
  // until we uncheck a checkbox which will then DELETE a stat from the state.selectedStatsObj

  if (weeklyData !== "null") {
    const selectedStat = (value, name, checked, apiName) => {
      if (overlaySize === 'Small') {
        if (checked) {
          if (state.tmpStat1[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat1: [name, value]
            }))
            return
          }
          if (state.tmpStat2[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat2: [name, value]
            }))
            return
          }
          if (state.tmpStat3[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat3: [name, value]
            }))
            return
          }
          if (state.tmpStat4[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat4: [name, value]
            }))
            return
          }

        } else {
          if (state.tmpStat1[0] === name) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat1: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat2[0] === name) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat2: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat3[0] === name) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat3: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat4[0] === name) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat4: ["Example", 33]
            }))
            return
          }
        }
      }

      if (overlaySize === 'Large') {
        if (checked) {
          if (state.tmpStat1[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat1: [name, value]
            }))
            return
          }
          if (state.tmpStat2[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat2: [name, value]
            }))
            return
          }
          if (state.tmpStat3[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat3: [name, value]
            }))
            return
          }
          if (state.tmpStat4[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat4: [name, value]
            }))
            return
          }
          if (state.tmpStat5[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat5: [name, value]
            }))
            return
          }
          if (state.tmpStat6[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat6: [name, value]
            }))
            return
          }
          if (state.tmpStat7[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat7: [name, value]
            }))
            return
          }
          if (state.tmpStat8[0] === "Example") {
            state.selectedStatsObj[name] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat8: [name, value]
            }))
            return
          }

        } else {
          if (state.tmpStat1[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat1: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat2[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat2: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat3[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat3: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat4[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat4: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat5[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat5: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat6[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat6: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat7[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat7: ["Example", 33]
            }))
            return
          }
          if (state.tmpStat8[1] === value) {
            delete state.selectedStatsObj[name]
            setState(prev => ({
              ...prev,
              tmpStat8: ["Example", 33]
            }))
            return
          }
        }
      }
    };


    if (overlaySize === "Large") {
      return (
        <>
          <LargeOverlay
            checked={state.selectedStatsObj}
            overlayUrl={state.overlayUrl}
            tmpStat1={state.tmpStat1}
            tmpStat2={state.tmpStat2}
            tmpStat3={state.tmpStat3}
            tmpStat4={state.tmpStat4}
            tmpStat5={state.tmpStat5}
            tmpStat6={state.tmpStat6}
            tmpStat7={state.tmpStat7}
            tmpStat8={state.tmpStat8}
            gameModes={gameModes}
            weeklyData={weeklyData}
            lifetimeData={lifetimeData}
            gunData={gunData}
            selectedStat={selectedStat}
            saveOverlay={saveOverlay}
          />
          {Object.keys(state.selectedStatsObj).length === 8 ?
            <div className={classes.root}>
              <Chip
                className={classes.smallOverlay}
                icon={<FaceIcon />}
                label="Max Stats Selected"
                color="secondary"
                deleteIcon={<DoneIcon />}
              />
            </div>
            : <></>}

          {Object.keys(state.selectedStatsObj).length !== 8 ?
            <div className={classes.root}>
              <Chip
                className={classes.smallOverlay}
                icon={<FaceIcon />}
                label="Please Select 8 Stats"
                color="Primary"
                deleteIcon={<DoneIcon />}
              />
            </div>
            : <></>}


        </>
      );
    } else {
      return (
        <>
          <SmallOverlay
            gameModes={gameModes}
            overlayUrl={state.overlayUrl}
            tmpStat1={state.tmpStat1}
            tmpStat2={state.tmpStat2}
            tmpStat3={state.tmpStat3}
            tmpStat4={state.tmpStat4}
            weeklyData={weeklyData}
            lifetimeData={lifetimeData}
            gunData={gunData}
            selectedStat={selectedStat}
            saveOverlay={saveOverlay}
          />
          {Object.keys(state.selectedStatsObj).length === 4 ?
            <div className={classes.root}>
              <Chip
                className={classes.smallOverlay}
                icon={<FaceIcon />}
                label="Max Stats Selected"
                color="secondary"
                deleteIcon={<DoneIcon />}
              />
            </div>
            : <></>}

          {Object.keys(state.selectedStatsObj).length !== 4 ?
            <div className={classes.root}>
              <Chip
                className={classes.smallOverlay}
                icon={<FaceIcon />}
                label="Please Select 4 Stats"
                color="Primary"
                deleteIcon={<DoneIcon />}
              />
            </div>
            : <></>}
        </>
      );
    }
  } else {
    return (
      <h1>No Weekly Stats</h1>
    )
  }
}

