import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import {useHistory} from 'react-router-dom';
// const cookieSession = require('cookie-session');




export default function useApplicationData () {
  const [cookies, setCookie] = useCookies(['name']);
  const history = useHistory();
  const [state, setState] = useState(prev => ({
    ...prev,
    name:"",
    platform: "",
  }));


  
  const [weapons1, setWeapon] = useState({
    gameModes: [],
    shown: [],
    shownCat: [],
    gameModeCat: [],
    category: [],
    weapons: [],
    weeklyData: [],
    gunNavSelected: [],
    selectedGunTab: 'weapon_assault_rifle',
  })


  async function getDropZone () {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/dropzone')
      .then(res => {
        // console.log("dropzone", res.data[0])
        return res.data[0]
      })
      .catch(error => {
        // console.log('Dropzone Axios Error: ', error)
      });
  };

  async function getPrimary() {
    console.log("iniside function");
    return await axios('http://localhost:3030/roulette/primary')
      .then(res => {
        //  console.log("weapon", res.data[0])
         return res.data[0]
      })
      .catch(error => {
        // console.log('Weapon Axios Error: ', error)
      });
  }

  async function getPrimaryAttachments () {
    // console.log("iniside function");
    return await axios('http://localhost:3030/roulette/attachments')
      .then(res => {
        //  console.log("weapon", res.data)
         return res.data
      })
      .catch(error => {
        // console.log('Weapon Axios Error: ', error)
      });
  }

  async function getSecondary() {
    // console.log("iniside function");
    return await axios('http://localhost:3030/roulette/secondary')
      .then(res => {
        //  console.log("weapon", res.data[0])
         return res.data[0]
      })
      .catch(error => {
        // console.log('Weapon Axios Error: ', error)
      });
  }
 
  async function getRules() {
    // console.log("iniside function");
    return await axios('http://localhost:3030/roulette/rules')
      .then(res => {
        // console.log("rules", res.data[0])
        return res.data[0]
      })
      .catch(error => {
        // console.log('Rules Axios Error: ', error)
      });
    }

    async function getTactical() {
      // console.log("iniside function");
      return await axios('http://localhost:3030/roulette/tactical')
        .then(res => {
          // console.log("tactical", res.data)
          return res.data
        })
        .catch(error => {
          // console.log('Rules Axios Error: ', error)
        });
      }
  
  

  function setGamerData () {
    // console.log(state.name);
    // console.log(state.platform);
    const gamerTag = state.name.replace("#", "%23")
    // const gamerTag = state.name;

    const gamerPlatform = state.platform
    const gamerInfo = {gamerTag, gamerPlatform}
    setCookie('gamerTagInfo', {gamerTag, gamerPlatform}, { path: '/' });
    
    
    history.push("/stats")
    
    
    return;
        
  }

  
  useEffect(() => {
    //let nickname = props.name.replace("#", "%23")
    // nickname will === username
    // Promise.all([
    //   axios.get(`http://localhost:3030/stats/moho`),
    //   axios.get(`http://localhost:3030/stats/allstats/moho`)
    // ])
    let gamerTag = '';
    let gamerPlatform = '';
    if(cookies.gamerTagInfo) {
      gamerTag = cookies.gamerTagInfo.gamerTag;
      gamerPlatform = cookies.gamerTagInfo.gamerPlatform;
      console.log(gamerPlatform);
    }
    else {
      gamerTag = 'Nickmercs%2311526';
      gamerPlatform = 'battle';
    };

    // console.log ('Gamer Tag: ', gamerTag);
    // console.log ('Gamer Platform: ', gamerPlatform);

    // if (cookies.gamerTagInfo) {
      axios.get(`http://localhost:3030/stats/${gamerTag}&${gamerPlatform}`)
      .then(res => {
        
        // console.log(res.data[0].weeklyData);
        if (res.data[0].weeklyData !== null) {
        const weapons = res.data[2].guns;
        const gameModes = res.data[1].gameModes;
        const weeklyData = res.data[0].weeklyData.all;
        // console.log(weeklyData);
        // console.log(gameModes);
        // console.log(weapons);
        setWeapon(prev => ({
          ...prev,
          gameModes,
          weapons,
          weeklyData,
          category: "",
        }))
      } else {
        // console.log("insided elsee useapllication");
        const weapons = res.data[2].guns;
        const gameModes = res.data[1].gameModes;
        // console.log(gameModes);
        // console.log(weapons);
        setWeapon(prev => ({
          ...prev,
          gameModes,
          weapons,
          category: "",
        }))
      }

      })
      .catch(error => {
        console.log(error);
      })
    // }
    
  }, [])

  // useEffect(() => {
  //   //let nickname = props.name.replace("#", "%23")
  //   // nickname will === username
  //   // Promise.all([
  //   //   axios.get(`http://localhost:3030/stats/moho`),
  //   //   axios.get(`http://localhost:3030/stats/allstats/moho`)
  //   // ])
  //     axios.get(`http://localhost:3030/stats/moho}`)
  //     .then(res => {
        
  //       // console.log(res.data[0].weeklyData);
  //       if (res.data[0].weeklyData !== null) {
  //       const weapons = res.data[2].guns;
  //       const gameModes = res.data[1].gameModes;
  //       const weeklyData = res.data[0].weeklyData.all;
  //       console.log(weeklyData);
  //       console.log(gameModes);
  //       console.log(weapons);
  //       setWeapon(prev => ({
  //         ...prev,
  //         gameModes,
  //         weapons,
  //         weeklyData,
  //         category: "",
  //       }))
  //     } else {
  //       console.log("insided elsee useapllication");
  //       const weapons = res.data[2].guns;
  //       const gameModes = res.data[1].gameModes;
  //       console.log(gameModes);
  //       console.log(weapons);
  //       setWeapon(prev => ({
  //         ...prev,
  //         gameModes,
  //         weapons,
  //         category: "",
  //       }))
  //     }

  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
    
  // }, [])
  
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
    weapons1,
    setWeapon,
    cookies,
  };
}