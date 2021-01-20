import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import LargeOverlay from './LargeOverlay'
import SmallOverlay from './SmallOverylay'
import axios from  'axios';
import { Input } from '@material-ui/core';


export default function OverlayBar(props) {
  let { id } = useParams();
  const { weeklyData, lifetimeData, gunData } = props
  const [state, setState] = useState({
    tmpStat1: ["Example Stat", 33],
    tmpStat2: ["Example Stat", 33],
    tmpStat3: ["Example Stat", 33],
    tmpStat4: ["Example Stat", 33],
    tmpStat5: ["Example Stat", 33],
    tmpStat6: ["Example Stat", 33],
    tmpStat7: ["Example Stat", 33],
    tmpStat8: ["Example Stat", 33],
    selectedStatsObj: {},
    overlayUrl: ''
  })


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
    console.log(state.selectedStatsObj);
    if (id === 'Small') {
      if(Object.keys(state.selectedStatsObj).length !== 4){
        console.log("Whoaaa whoaaa Please select 4 stats");
      }
      const uniqueUrlKey = generateRandomString()

      const overlayUrlData = {
        size: id,
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

  if (weeklyData !== "null") {
    const selectedStat = (value, name, checked, apiName) => {
      if (id === 'Small') {
        if (checked) {
          if (state.tmpStat1[0] === "Example Stat") {
            state.selectedStatsObj['stat1'] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat1: [name, value]
            }))
            return
          }
          if (state.tmpStat2[0] === "Example Stat") {
            state.selectedStatsObj['stat2'] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat2: [name, value]
            }))
            return
          }
          if (state.tmpStat3[0] === "Example Stat") {
            state.selectedStatsObj['stat3'] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat3: [name, value]
            }))
            return
          }
          if (state.tmpStat4[0] === "Example Stat") {
            state.selectedStatsObj['stat4'] = apiName;
            setState(prev => ({
              ...prev,
              tmpStat4: [name, value]
            }))
            return
          }

        } else {
          if (state.tmpStat1[0] === name) {
            delete state.selectedStatsObj['stat1']
            console.log(state.selectedStatsObj);
            setState(prev => ({
              ...prev,
              tmpStat1: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat2[0] === name) {
            delete state.selectedStatsObj['stat2']
            setState(prev => ({
              ...prev,
              tmpStat2: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat3[0] === name) {
            delete state.selectedStatsObj['stat3']
            setState(prev => ({
              ...prev,
              tmpStat3: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat4[0] === name) {
            delete state.selectedStatsObj['stat4']
            setState(prev => ({
              ...prev,
              tmpStat4: ["Example Stat", 33]
            }))
            return
          }
        }
      }

      if (id === 'Large') {
        if (checked) {
          if (state.tmpStat1[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat1: [name, value]
            }))
            return
          }
          if (state.tmpStat2[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat2: [name, value]
            }))
            return
          }
          if (state.tmpStat3[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat3: [name, value]
            }))
            return
          }
          if (state.tmpStat4[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat4: [name, value]
            }))
            return
          }
          if (state.tmpStat5[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat5: [name, value]
            }))
            return
          }
          if (state.tmpStat6[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat6: [name, value]
            }))
            return
          }
          if (state.tmpStat7[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat7: [name, value]
            }))
            return
          }
          if (state.tmpStat8[0] === "Example Stat") {

            setState(prev => ({
              ...prev,
              tmpStat8: [name, value]
            }))
            return
          }

        } else {
          if (state.tmpStat1[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat1: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat2[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat2: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat3[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat3: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat4[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat4: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat5[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat5: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat6[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat6: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat7[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat7: ["Example Stat", 33]
            }))
            return
          }
          if (state.tmpStat8[1] === value) {

            setState(prev => ({
              ...prev,
              tmpStat8: ["Example Stat", 33]
            }))
            return
          }
        }
      }
    };
    if (id === "Large") {
      return (
        <>
          <LargeOverlay
            tmpStat1={state.tmpStat1}
            tmpStat2={state.tmpStat2}
            tmpStat3={state.tmpStat3}
            tmpStat4={state.tmpStat4}
            tmpStat5={state.tmpStat5}
            tmpStat6={state.tmpStat6}
            tmpStat7={state.tmpStat7}
            tmpStat8={state.tmpStat8}
            weeklyData={weeklyData}
            lifetimeData={lifetimeData}
            gunData={gunData}
            selectedStat={selectedStat}
            saveOverlay={saveOverlay}
          />
        </>
      );
    } else {
      return (
        <>
          
          <SmallOverlay
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
        </>
      );
    }
  } else {
    return (
      <h1>No Weekly Stats</h1>
    )
  }
}

