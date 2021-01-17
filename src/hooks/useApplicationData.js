import { useState } from "react";
import axios from "axios";


export default function useApplicationData () {
  const [state, setState] = useState(prev => ({
    ...prev,
    name:"",
    platform: "",
  }));

  // useEffect(() => {
  //   console.log("In Axios");
  //   getDropZone();
  //   getGun();
  //   getRules();
  // }, [getDropZone,
  //   getRules,
  //   getGun])
  

  
  async function getDropZone () {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/dropzone')
      .then(res => {
        console.log("dropzone", res.data[0])
        return res.data[0]
        // setState(prev => ({
        //   ...prev,
        //   dropzone: res.data[0]
        // }));
      })
      .catch(error => {
        console.log('Dropzone Axios Error: ', error)
      });
  };

  async function getPrimary() {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/primary')
      .then(res => {
         console.log("weapon", res.data[0])
         return res.data[0]
        // setState(prev => ({
        //   ...prev,
        //   guns: res.data[0]
        // }));
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }

  async function getPrimaryAttachments () {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/attachments')
      .then(res => {
         console.log("weapon", res.data)
         return res.data
        // setState(prev => ({
        //   ...prev,
        //   guns: res.data[0]
        // }));
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }

  async function getSecondary() {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/secondary')
      .then(res => {
         console.log("weapon", res.data[0])
         return res.data[0]
        // setState(prev => ({
        //   ...prev,
        //   guns: res.data[0]
        // }));
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }
 
  async function getRules() {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/rules')
      .then(res => {
        console.log("rules", res.data[0])
        return res.data[0]
        // setState(prev => ({
        //   ...prev,
        //   rules: res.data[0]
        // }));
      })
      .catch(error => {
        console.log('Rules Axios Error: ', error)
      });
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
    nickname,
    getDropZone,
    getRules,
    getPrimary,
    getSecondary,
    getPrimaryAttachments
  };
}