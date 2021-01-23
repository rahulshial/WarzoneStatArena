import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import {useHistory} from 'react-router-dom';




export default function useApplicationData () {

  const [cookies, setCookie] = useCookies(['name']);
  const history = useHistory();

  // state for home page's text field
  const [state, setState] = useState(prev => ({
    ...prev,
    name:"",
    platform: "",
  }));


  // state for stat page
  const [allApiData, setAllApiData] = useState({
    gameModes: [],
    shown: [],
    shownCat: [],
    gameModeCat: [],
    category: [],
    weapons: [],
    weeklyData: [],
    gunNavSelected: [],
    selectedGunTab: 'weapon_assault_rifle',
    playerInfo: {},
  })

  // dropZone data database querry from StatServer
  async function getDropZone () {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/dropzone')
      .then(res => {
       
        return res.data[0]
      })
      .catch(error => {
        console.log('Dropzone Axios Error: ', error)
      });
  };

  // Primary Gun data database querry from StatServer
  async function getPrimary() {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/primary')
      .then(res => {
       
         return res.data[0]
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }

  // Gun Attachments data database querry from StatServer
  async function getPrimaryAttachments () {
    
    return await axios('http://localhost:3030/roulette/attachments')
      .then(res => {
        
         return res.data
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }

  // Secondary Gun data database querry from StatServer
  async function getSecondary() {
   
    return await axios('http://localhost:3030/roulette/secondary')
      .then(res => {
       
         return res.data[0]
      })
      .catch(error => {
        console.log('Weapon Axios Error: ', error)
      });
  }
 
  // Rules data database querry from StatServer
  async function getRules() {
    
    return await axios('http://localhost:3030/roulette/rules')
      .then(res => {
       
        return res.data[0]
      })
      .catch(error => {
        console.log('Rules Axios Error: ', error)
      });
    }

    // Tactical & Lethal Attachmnets data database querry from StatServer
    async function getTactical() {
      
      return await axios('http://localhost:3030/roulette/tactical')
        .then(res => {
          
          return res.data
        })
        .catch(error => {
          console.log('Rules Axios Error: ', error)
        });
      }
  
  
  // setting state of Gamer Tag and Gamer Platform
  function setGamerData () {
    const gamerTag = state.name.replace("#", "%23")

    const gamerPlatform = state.platform
    const gamerInfo = {gamerTag, gamerPlatform}
    setCookie('gamerTagInfo', {gamerTag, gamerPlatform}, { path: '/' });
    
    
    history.push("/stats")
    
    
    return gamerInfo;
        
  }

  // fetching Data from StatServer for Gamer, based on Gamer Tag & platform Input
  useEffect(() => {
  
    let gamerTag = '';
    let gamerPlatform = '';
    
    //  checking if coockie exist before making axios call
    if(cookies.gamerTagInfo) {

      gamerTag = cookies.gamerTagInfo.gamerTag;
      gamerPlatform = cookies.gamerTagInfo.gamerPlatform;
    }
    else {
      gamerTag = 'Nickmercs%2311526';
      gamerPlatform = 'battle';
    };

    

      axios.get(`http://localhost:3030/stats/${gamerTag}&${gamerPlatform}`)
      .then(res => {

        if (res.data[0].weeklyData !== null) {

        const weapons = res.data[2].guns;
        const gameModes = res.data[1].gameModes;
        const weeklyData = res.data[0].weeklyData.all;
        const playerInfo = res.data[4]
    
        setAllApiData(prev => ({
          ...prev,
          gameModes,
          weapons,
          weeklyData,
          category: "",
          playerInfo,
          shownCat: 'overview',
          shown: playerInfo
        }))
      } else {

        const weapons = res.data[2].guns;
        const playerInfo = res.data[4]
        const gameModes = res.data[1].gameModes;

        setAllApiData(prev => ({
          ...prev,
          gameModes,
          weapons,
          category: "",
          playerInfo,
          shownCat: 'overview',
          shown: playerInfo,
        }))
      }

      })
      .catch(error => {
        console.log(error);
      })

    
  }, [])

 
  
  return { 
    state,
    setState,
    setGamerData,
    getDropZone,
    getRules,
    getPrimary,
    getSecondary,
    getPrimaryAttachments,
    getTactical,
    allApiData,
    setAllApiData,
    cookies,
  };
}