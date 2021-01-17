import React, { useEffect } from 'react'
import axios from 'axios';
import '../overlay.css'
import bar from '../overlay/imgs/topBar.png'

export default function Overlay() {



  useEffect(() => {
    // let nickname = props.name.replace("#", "%23")
    // nickname will === username
      axios.get(`http://localhost:3030/stats/overlay/moho`)
        .then(res => {
        })
        .catch(error => {
          console.log(error);
        })
  }, [])



  return (
    <>
      <div className="full-bar"></div>
      <div className="stats">
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
  )
}
