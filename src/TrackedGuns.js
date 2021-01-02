import React from 'react'
import './stats.css'

export default function TrackedGuns(props) {


  return() => {
    
    
    const titles = []
    Object.keys(props.stats[0].properties).map((title) => {
      titles.push(<h4>{title}</h4>)
  
    })
    const stats = []
    Object.values(props.stats[0].properties).map((stat) => {
      stats.push(<h4>{stat}</h4>)
    })
  
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
                {titles}
                {stats}
              </div>
              <hr />
              <div>
                <h3 style={{ textAlign: 'center' }}>achives</h3>
              </div>
              <hr />
              <div className="gun-achieves">
                {props.achievements}
              </div>
            </div>
          </div>
        </div>
      </>
    )

  }
  
}
