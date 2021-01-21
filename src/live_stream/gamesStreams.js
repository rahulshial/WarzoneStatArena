import React, { useState, useEffect } from 'react';
import api from "./api";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"


function GameStreams ({match, location}) {
  console.log(location);
  const [streamData, setStreamData] = useState([])
  const [viewers, setViewers] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=512710`)
      console.log(result.data.data);
      let views = 0
      let dataArray = result.data.data
      let finalArray = dataArray.map (stream => {
        let newUrl = stream.thumbnail_url
          .replace('{width}', '300')
          .replace('{height}', '300')
        stream.thumbnail_url = newUrl
        views += stream.viewer_count
        return stream;
      })
     
      setStreamData(finalArray);
      setViewers(views)
    }

    
    console.log(viewers);
    fetchData();
  },[viewers])
  return (
    <div>
      
      <h1 className='text-center'>Warzone Top 20 Streams</h1>
      <br></br>
      <h3 className='text-center'>
        <strong className='text-primary'>{viewers}  </strong>
        Currently watching Top 20 Warzone Streams on Twitch
      </h3>
      <div className='row'>
      {streamData.map(stream => (
        <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
        <div className='card'>
          <img className='card-img-top' src={stream.thumbnail_url} alt=""></img>
          <div className="card-body">
            <h5 className="card-title">{stream.user_name}</h5>
            <div className='card-text'>
              {stream.viewer_count} live Viewers
            </div>
            <button className="btn btn-success">
              <a
                className='link'
                href={"http://twitch.tv/" + stream.user_name}
                target="_blank"
              >
                {stream.name} streams {" "}
              </a>
            </button>
          </div>
        </div>
      </div>
      ))}
      
    </div>
    </div>
      
    
    
  )
}

export default GameStreams;