// react import
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// local imports 
import api from "../live_stream/api";

const Games = () => {
  const [games, setGames] = useState([]);

  // grabbing game id and name for Warzone on Twitch API
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        "https://api.twitch.tv/helix/games?name=Call%20of%20Duty%3A%20Warzone"
      );
      // fetching warzone data from twitch api
      let dataArray = result.data.data[0];
      setGames(dataArray);
    };

    fetchData();
  }, []);
  
  return (
    <div className="row">
      <Link
        className="link1"
        to={{
          pathname: "/streams/game",
          state: {
            gameID: games.id,
            gameName: games.name,
          },
        }}
      >
        {games.name} streams{" "}
      </Link>
    </div>
  );
}

export default Games;
