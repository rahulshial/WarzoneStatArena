import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../overlay.css';

import OverlayBar from '../Overlay/OverlayBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function Overlay() {
  const [state, setState] = useState({
    weeklyData: {},
    gameModes: {},
    gunData: {},
    lifetimeData: {},
  })

  useEffect(() => {
    // let nickname = props.name.replace("#", "%23")
    // nickname will === username
    axios.get(`http://localhost:3030/stats/Nickmercs%2311526&battle`)
      .then(res => {
        if (res.data[0].weeklyData) {
          setState(prev => ({
            ...prev,
            weeklyData: res.data[0],
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))
        } else {
          console.log(res.data[3]);
          setState(prev => ({
            ...prev,
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))
        }
        
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  const functun = () => {
    if (Object.keys(state.gameModes).length !== 0) {
      if (Object.keys(state.weeklyData).length > 0){
        return (
          
          <Router>
            <div>
              <h2>Choose Overlay To Customize</h2>
              <ul>
                <h1>
                  <Link to="/Large">Large Overlay</Link>
                </h1>
  
                <h1>
                  <Link to="/Small">Small Overlay</Link>

                </h1>
              </ul>

              <Switch>

                <Route path="/:id" children={<OverlayBar weeklyData={state.weeklyData} lifetimeData={state.lifetimeData} gunData={state.gunData} />} />

              </Switch>

            </div>
          </Router>
        )
      } else {
        return (
          <Router>
            <div>
              <h2>Choose Overlay To Customize</h2>
              <ul>
                <h1>
                  <Link to="/Large">Large Overlay</Link>
                </h1>
  
                <h1>
                  <Link to="/Small">Small Overlay</Link>
                </h1>
              </ul>
              <Switch>
                <Route path="/:id" children={<OverlayBar weeklyData="null" lifetimeData={state.lifetimeData} gunData={state.gunData} />} />
              </Switch>
            </div>
          </Router>
        )        
      }
    }
  }
  return (
    <>
      {functun()}
    </>
  )
}

