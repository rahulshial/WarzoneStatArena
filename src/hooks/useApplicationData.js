import { useState, useEffect } from "react";
import axios from "axios";




export default function useApplicationData () {
  const [state, setState] = useState(prev => ({
    ...prev,
    guns:[],
    dropzone:[],
    rules:[],
    name:"",
    platform: ""
  }));
  useEffect(() => {
    console.log("In Axios");
    getDropZone();
    getGun();
    getRules();
    getGameId();
    
  
  }, [setState])
  
  function getDropZone() {
    console.log("iniside function");
    axios('http://localhost:3001/dropzone')
      .then(res => {
      console.log("dropzone")
       
        return res.data
      })
      .then(res => {
        setState(prev => ({
          ...prev,
          dropzone: res

        }));
      });
  }
  function getGun() {
    console.log("iniside function");
    axios('http://localhost:3001/gun')
      .then(res => {
         console.log("weapon")
        
        return res.data
      })
      .then()
      .then(data => {
        setState(prev => ({
          ...prev,
          guns: data

        }));
      });
  }
 
  function getRules() {
    console.log("iniside function");
    axios('http://localhost:3001/rules')
      .then(res => {
        console.log("rules")
      
        return res.data
      })
      .then(data => {
        setState(prev => ({
          ...prev,
          rules: data

        }));
      });
  }
  function getGameId () {
    axios.post('http://localhost:3002/')
      .then ((req, res) => {
        console.log(req.body);
      })
  }
  function nickname () {
    
    console.log("hiii");
    let nickname = state.name.replace("#", "%23")
    console.log(state.name);
    console.log(nickname);
    axios
        .get(`http://localhost:8080/${nickname}`)
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