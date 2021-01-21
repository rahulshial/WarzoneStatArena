import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './stats.css';
import Home from './RouterPages/Home.js';
import Stats from './RouterPages/Stats.js';
import Overlay from './RouterPages/Overlay.js';
import Profile from './RouterPages/Profile.js'
import PrimarySearchAppBar from './Navbar.js';
import Roulette from './roulette/Roulette.js';
import OverlaySelected from './Overlay/OverlaySelected'
import useApplicationData from "./hooks/useApplicationData";
import Games from "./live_stream/games";
import Streams from "./live_stream/streams";
import GameStreams from "./live_stream/gamesStreams";



const globalState = {
  text: "foo",
};

const globalStateContext = React.createContext(globalState);
export default function App(props) {

  // const {
  //   state,
  //   setState,
  //   setGamerData,
  // } = useApplicationData();
  // function setName(event) {

  //   setState(prev => ({
  //     ...prev,
  //     name: event.target.value
  //   }))
  // }
  // function setPlatform(platform) {
  //   setState(prev => ({
  //     ...prev,
  //     platform
  //   }))
  // }
  // name={state.name} setGamerData={setGamerData} setName={setName} setPlatform={setPlatform} platfrom={state.platfrom} 

  return (
    <globalStateContext.Provider value={globalState}>
      <>

        {window.location.pathname.indexOf('show') === 9 ? <></> : <PrimarySearchAppBar />}
        <Switch>
          <Route exact path='/' render={(props) => <Home/>} />
          <Route path='/stats' render={(props) => <Stats />} />
          <Route path='/roulette' component={Roulette} />
          <Route path='/Large' component={Overlay} />
          <Route path='/myProf' component={Profile} />
          <Route path='/overlay/show' component={OverlaySelected} />
          <Route exact path='/streams' component={Games}/>
          <Route exact path='/streams/game/:id' component={GameStreams} />
          <Route exact path='/streams/game/:id/:id' component={Streams} />
        </Switch>
      </>
    </globalStateContext.Provider>
  );
}

