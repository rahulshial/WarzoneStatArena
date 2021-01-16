import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData () {
  const [state, setState] = useState(prev => ({
    ...prev,
    guns:[],
    dropzone:[],
    rules:[],
    name:"",
    platform: "",
  }));

  useEffect(() => {
    console.log("In Axios");
    getDropZone();
    getGun();
    getRules();
    // getGameId();  
  }, [setState])
  
  const getDropZone = () => {
    console.log("iniside function");
    axios('http://localhost:3030/roulette/dropzone')
      .then(res => {
        console.log("dropzone", res.data[0])
        setState(prev => ({
          ...prev,
          dropzone: res.data[0]
        }));
      })
      .catch(error => {
        console.log('Dropzone Axios Error: ', error)
      });
  };

  function getGun() {
    console.log("iniside function");
    axios('http://localhost:3030/roulette/gun')
      .then(res => {
         console.log("weapon", res.data[0])
        setState(prev => ({
          ...prev,
          guns: res.data[0]
        }));
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }
 
  function getRules() {
    console.log("iniside function");
    axios('http://localhost:3030/roulette/rules')
      .then(res => {
        console.log("rules", res.data[0])
        setState(prev => ({
          ...prev,
          rules: res.data[0]
        }));
      })
      .catch(error => {
        console.log('Rules Axios Error: ', error)
      });
    }
  
  function getGameId () {
    axios.post('http://localhost:3000/')
      .then ((req, res) => {
        console.log(req.body);
      })
  }

  function nickname () {
    
    console.log("hiii");
    let nickname = state.name.replace("#", "%23")
    console.log(state.name);
    console.log(state.platform);
    axios
        .get(`http://localhost:8080/stats/nickname=${nickname}&platform=${state.platform}`)
        .then(res => {
          console.log("are you resolving");
          setState(prev => ({
            ...prev,
            name: res.data
  
          }));
          return;
        })
        .catch(err => {
          console.log(err);
        })
        
  }
  
  return { 
    state,
    setState,
    nickname
  };
}