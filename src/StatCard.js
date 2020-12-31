import React from 'react'

export default function StatCard(props) {
  const {image, hits, kills, kd, headshots, accuracy, shots, gunName, onAdd} = props;



  const checkStats = () => {
    if (kills > 50) {
      return (
        <img class="achiev-icons" src="https://www.flaticon.com/svg/static/icons/svg/3135/3135783.svg" alt="" />
      )
    }
  }

  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <button onClick={() => onAdd(gunName)} >{gunName}</button>
          <div class="content">
            <div class='gun-flex'>
              <img class="gun-icon" src={image} alt="" />
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="top-row">
            <h4>Hits</h4>
            <h4>Kills</h4>
            <h4>KD</h4>
            <h4>HeadShots</h4>
            <h4>Acc</h4>
            <h4>Shots</h4>
          </div>
          <div class="top-row">
            <h5>{hits}</h5>
            <h5>{kills}</h5>
            <h5>{kd}</h5>
            <h5>{headshots}</h5>
            <h5>{accuracy}</h5>
            <h5>{shots}</h5>
          </div>
          <div class="achievements">
            <h5>Achievements</h5>
            <hr></hr>
            <div>
            {checkStats()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
