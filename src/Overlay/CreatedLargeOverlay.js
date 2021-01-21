import React, { useEffect } from 'react'
import axios from 'axios'

export default function CreatedSmallOverlay(props) {
  const { 
    statName1,
    statValue1,
    statName2,
    statValue2,
    statName3,
    statValue3,
    statName4,
    statValue4,
    statName5,
    statValue5,
    statName6,
    statValue6,
    statName7,
    statValue7,
    statName8,
    statValue8,
  } = props

  return (
    <>
      <div className="full-bar-created"></div>
          <div className="stats-created">
            <div className="stats1-created">
              <div className="overlay-title1">{statName1}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue1) ? statValue1 : statValue1.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName2}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue2) ? statValue2 : statValue2.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName3}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue3) ? statValue3 : statValue3.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName4}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue4) ? statValue4 : statValue4.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName5}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue5) ? statValue5 : statValue5.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName6}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue6) ? statValue6 : statValue6.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName7}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue7) ? statValue7 : statValue7.toFixed(2)}</div>
            </div>
            <div className="stats1-created">
              <div className="overlay-title1">{statName8}</div>
              <div className="overlay-stat1">{Number.isInteger(statValue8) ? statValue8 : statValue8.toFixed(2)}</div>
            </div>
            </div>
    </>
  )
}
