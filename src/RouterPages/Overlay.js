import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../overlay.css';
import bar from '../overlay/imgs/topBar.png';
import DropDownCategory from "../DropDownCategory";
import DropDownStats from "../DropDownStats";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function Overlay() {

  const [state, setstate] = useState()

  useEffect(() => {
    // let nickname = props.name.replace("#", "%23")
    // nickname will === username
    axios.get(`http://localhost:3030/stats/overlay/moho`)
      .then(res => {
        setstate(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  const functun = () => {
    if (state) {
      return (
        <Router>
          <div>
            <h2>Choose Overlay To Customize</h2>
            <ul>
              <li>
                <h1>
                  <Link to="/Large">Large Overlay</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/Small">Small Overlay</Link>
                </h1>
              </li>
            </ul>
            <Switch>
              <Route path="/:id" children={<Child allData={state} />} />
            </Switch>
          </div>
        </Router>
      )

    }
  }
  return (
    <>
      {functun()}
    </>
  )
}

function Child(props) {
  let { id } = useParams();
  const [state, setstate] = useState('weeklyData')
  const funt = (selected) => {
    setstate(selected)
  }
  


  if (id === "Large") {

    return (
      <>
        <DropDownCategory
          allData={props.allData}
          selected={funt}
        />
        <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />
                <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={"large"}
        />

        <div className="full-bar"></div>
        <div className="stats">
          <div className="stats1">
            <div className="overlay-title1">Level</div>
            <div className="overlay-stat1">{props.allData.level}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Kills</div>
            <div className="overlay-stat1">33</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Kills</div>
            <div className="overlay-stat1">33</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Kills</div>
            <div className="overlay-stat1">33</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <DropDownCategory
          allData={props.allData}
          selected={funt}
        />
        <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={'medium'}
        />
        <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={'medium'}
        />
        <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={'medium'}
        />
        <DropDownStats
          allData={props.allData}
          category={state}
          overlaySize={'medium'}
        />
        <div className="medium-bar"></div>
        <div className="stats-medium-bar">
          <div className="stats1">
            <div className="overlay-title1">level</div>
            <div className="overlay-stat1">{props.level}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Kills</div>
            <div className="overlay-stat1">33</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">Deaths</div>
            <div className="overlay-stat1">22</div>
          </div>
        </div>
      </>
    );
  }


}