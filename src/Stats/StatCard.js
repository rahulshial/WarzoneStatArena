import React from 'react'

export default function StatCard(props) {
  const { image, gunName, onAdd, cat, topRow, statsRow } = props;
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <button onClick={() => onAdd(gunName, image, cat)} >{gunName}</button>
          <button onClick={cat} >Check Category</button>

          <img className="gun-icon" src={image} alt="" />
          <div className="content">
            <div className='gun-flex'>
            </div>
          </div>
        </div>
        <div className="face face2">

          <table className='gun-item-table'>

            <tr>
              {topRow}
            </tr>
            <tr>
            {statsRow}

            </tr>

          </table>
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
