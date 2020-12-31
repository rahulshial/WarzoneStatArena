import React from 'react'
import './stats.css'



export default function TrackedGuns(props) {


  return (
    <>
      <div>
        <div className="fav-gun-card">
          <div className="card-img">
            <img className="fav-gun-icon" src={props.image} alt="" />
          </div>

          <div>
        <button onClick={() => props.onRemove(props.gunName)}>Remove</button>
            <div className="right-side">
              <h3 style={{ textAlign: 'center' }}>{props.gunName}</h3>
              <hr />
            </div>

            <div>
              <h5>Kills: {props.kills}</h5>
              <h5>Shots: {props.shots}</h5>
              <h5>Hits: {props.hits}</h5>
              <h5>KD: {props.kdRatio}</h5>
              <h5>Head Shots: {props.headshots}</h5>
              <h5>Accuracy: {props.accuracy}</h5>
            </div>
            <hr />
            <div>
              <h3 style={{ textAlign: 'center' }}>achives</h3>
            </div>
            <hr/>
            <div className="gun-achieves">
              {props.achievements}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
