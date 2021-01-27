import React from "react";
import ReactPlayer from "react-player";

const Streams = ({ match, location }) => {

  // showing live Twitch on our Server
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        color: "rgb(255, 211, 105)",
        backgroundColor: "#191d24",
      }}
    >
      <h1 style={{ fontSize: "30px", marginTop: "30px" }}>
        Watching {match.params.id}'s Stream
      </h1>
      <h2 style={{ margin: "40px" }}>
        <strong className="text-primary">{location.state.views}</strong> Viewers
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <ReactPlayer url={`http://twitch.tv/${location.state.gamerName}`} />
      </div>
      <div>
        <ReactPlayer
          url={`http://twitch.tv/embed/${location.state.gamerName}/chat?ldarkpopout&parent=cq-esports.com`}
        />
      </div>
    </div>
  );
}

export default Streams;
