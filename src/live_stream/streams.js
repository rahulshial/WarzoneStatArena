import React from 'react'
import ReactPlayer from "react-player"


function Streams ({match, location}) {
  console.log(location);
  return (
    <div>
      <ReactPlayer 
        url={`http://twitch.tv/${location.state.username}`}
        />
    </div>
  )
}

export default Streams;