import React, {useState, useEffect} from 'react';
import api from "./api";
import { Link } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
// import "shards-ui/dist/css/shards/shards.min.css"






function Games () {
  const [games, setGames] = useState([])

  
  // 'https://api.twitch.tv/helix/games?name=Warzone' --header 'client-id: gdd6ap5ukewvnjfff55esj36jf4rdn' --header 'Authorization: Bearer chyza35wqkhe04gpotisywcuajmlz6'

  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/games?name=Call%20of%20Duty%3A%20Warzone')
      console.log(result.data.data[0]);
      let dataArray = result.data.data[0]
      // let finalArray = dataArray.map (game => {
      //   let newUrl = game.replace('{width}', '300').replace('{height}', '300')
      //   game.box_art_url = newUrl
      //   return game;
      // })
      
      setGames(dataArray);
    }

    fetchData();
  },[])

  return (
    
    <div className='row'>
     
              <Link
                className='link1'
                // style={{color:"#1a1f26"}}
                to ={{
                  pathname:"/streams/game",
                  state: {
                    gameID: games.id,
                    username: games.name,
                  }
                }}
              >
                {games.name} streams {" "}
              </Link>
           
          
    </div>
    
  )
}

 export default Games;

// jc4h7868s5vyh8yhsqafc6e90imp0l
// gdd6ap5ukewvnjfff55esj36jf4rdn

// chyza35wqkhe04gpotisywcuajmlz6

// curl --location --request GET 'https://api.twitch.tv/helix/games' --header 'client-id: gdd6ap5ukewvnjfff55esj36jf4rdn' --header 'Authorization: Bearer chyza35wqkhe04gpotisywcuajmlz6'