import React from 'react'

export default function StatCard(props) {
  const { image, gunName, onAdd, cat } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <button onClick={() => onAdd(gunName, image, cat)} >{gunName}</button>
          <button onClick={cat} >Check Category</button>
          <div className="content">
            <div className='gun-flex'>
              <img className="gun-icon" src={image} alt="" />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="top-row">
            {props.topRow}
          </div>
          <div className="top-row">
            {props.statsRow}
          </div>
          <div className="achievements">
            <h5>Achievements</h5>
            <hr></hr>
            <div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
