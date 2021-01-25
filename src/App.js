//react imports
import React from "react";
import { Switch, Route} from "react-router-dom";
// local imports and styling
import "./App.css";
import "./stats.css";

// Routes and NavBar
import Home from "./RouterPages/Home.js";
import Stats from "./RouterPages/Stats.js";
import Overlay from "./RouterPages/Overlay.js";
import Profile from "./Profile/Profile.js";
import PrimarySearchAppBar from "./Navbar.js";
import Roulette from "./roulette/Roulette.js";
import OverlaySelected from "./Overlay/OverlaySelected";
import Streams from "./live_stream/streams";
import GameStreams from "./live_stream/gamesStreams";

const globalState = {
  text: "foo",
};

const globalStateContext = React.createContext(globalState);
export default function App(props) {
  return (
    <globalStateContext.Provider value={globalState}>
      <>
        {window.location.pathname.indexOf("show") === 9 ? (
          <></>
        ) : (
          <PrimarySearchAppBar />
        )}

        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route path="/stats" render={(props) => <Stats />} />
          <Route path="/roulette" component={Roulette} />
          <Route path="/create" component={Overlay} />
          <Route path="/myProf" component={Profile} />
          <Route path="/overlay/show" component={OverlaySelected} />
          <Route exact path="/streams/game" component={GameStreams} />
          <Route exact path="/streams/game/:id/:id" component={Streams} />
        </Switch>
      </>
    </globalStateContext.Provider>
  );
}
