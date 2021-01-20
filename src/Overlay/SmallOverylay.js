import React, { useState } from 'react'
import CheckboxCategories from './CheckboxCategories'

export default function SmallOverylay(props) {
  const {
    overlayUrl,
    saveOverlay,
    weeklyData, 
    lifetimeData, 
    gunData, 
    selectedStat,
    tmpStat1,
    tmpStat2,
    tmpStat3,
    tmpStat4
   } = props
   if (overlayUrl) {
    return(
      <>
        <CheckboxCategories
          selectedStat={selectedStat}
          weeklyData={weeklyData}
        />
        
        <div className="medium-bar"></div>
        <div className="stats-medium-bar">
          <div className="stats1">
            <div className="overlay-title1">{tmpStat1[0]}</div>
            <div className="overlay-stat1">{tmpStat1[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat2[0]}</div>
            <div className="overlay-stat1">{tmpStat2[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat3[0]}</div>
            <div className="overlay-stat1">{tmpStat3[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat4[0]}</div>
            <div className="overlay-stat1">{tmpStat4[1]}</div>
          </div>
          {overlayUrl.length > 0 ? <textarea name="" id="" cols="30" rows="2">{overlayUrl}</textarea>: <></> }
          <button onClick={(e) => { saveOverlay() }}>Select This Overlay</button>
        </div>
      </>
    )
   } else {
    return(
      <>
        <CheckboxCategories
          selectedStat={selectedStat}
          weeklyData={weeklyData}
        />
        
        <div className="medium-bar"></div>
        <div className="stats-medium-bar">
          <div className="stats1">
            <div className="overlay-title1">{tmpStat1[0]}</div>
            <div className="overlay-stat1">{tmpStat1[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat2[0]}</div>
            <div className="overlay-stat1">{tmpStat2[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat3[0]}</div>
            <div className="overlay-stat1">{tmpStat3[1]}</div>
          </div>
          <div className="stats1">
            <div className="overlay-title1">{tmpStat4[0]}</div>
            <div className="overlay-stat1">{tmpStat4[1]}</div>
          </div>
          <button onClick={(e) => { saveOverlay() }}>Select This Overlay</button>
        </div>
      </>
    )
   }

}
