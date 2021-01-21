import React, {useState, useEffect} from 'react';
import api from "./api";
import axios from "axios"





function Games () {
  const [games, setGames] = useState([])

  
   axios.post('https://id.twitch.tv/oauth2/token?client_id=gdd6ap5ukewvnjfff55esj36jf4rdn&client_secret=jc4h7868s5vyh8yhsqafc6e90imp0l&grant_type=client_credentials')
  .then (res => {
    console.log(res.data.access_token);
    // axios.post(`https://id.twitch.tv/oauth2/revoke?client_id=gdd6ap5ukewvnjfff55esj36jf4rdn&token=${res.data.access_token}`)
    

  
})
  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/games')
      console.log(result.data);
    }

    fetchData();
  },[])
  return (
    <h1>
      Most Pouplar
    </h1>
  )
}

 export default Games;

// jc4h7868s5vyh8yhsqafc6e90imp0l
// gdd6ap5ukewvnjfff55esj36jf4rdn

// curl --location --request GET 'https://api.twitch.tv/helix/games' --header 'client-id: gdd6ap5ukewvnjfff55esj36jf4rdn' --header 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx'