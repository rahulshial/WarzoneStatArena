import React from 'react'

export default function StatCard(props) {
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <button onClick={() => onButtonClick(gun)} >ADD TO PROFILE</button>
          <div class="content">
            <div class='gun-flex'>

              <img class="gun-icon" src={gunImgs[gun]} alt="" />
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
            <h5>{kdRatio}</h5>
            <h5>{headShots}</h5>
            <h5>{accuracy}</h5>
            <h5>{shots}</h5>
          </div>
          <div class="achievements">

            <h2>Achievements</h2>
            <hr></hr>
            <div >
              <img class="achiev-icons" src="https://www.flaticon.com/svg/static/icons/svg/3135/3135783.svg" />
              <img class="achiev-icons" src="https://www.flaticon.com/svg/static/icons/svg/1170/1170611.svg" />
              <img class="achiev-icons" src="https://www.flaticon.com/svg/static/icons/svg/3938/3938361.svg" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
