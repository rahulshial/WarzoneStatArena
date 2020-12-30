import { useState, useEffect } from "react";
import axios from "axios";


export default function useApplicationData () {
  const [state, setState] = useState({
    guns:[],
    dropzone:[],
    rules:[],
  });
  useEffect(() => {
    console.log("In Axios");
    getDropZone();
    getGun();
    getRules();
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
  return { 
    state,
  };
}