import React, { useState } from 'react'
import CheckboxCategories from './CheckboxCategories'


export default function LargeOverlay(props) {
  const { 
    saveOverlay,
    weeklyData, 
    lifetimeData, 
    gunData, 
    selectedStat,
    tmpStat1,
    tmpStat2,
    tmpStat3,
    tmpStat4,
    tmpStat5,
    tmpStat6,
    tmpStat7,
    tmpStat8,
   } = props
  return (
    <>
      <CheckboxCategories
            selectedStat={selectedStat}
            weeklyData={weeklyData}
          />
          <div className="full-bar"></div>
          <div className="stats">
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
            <div className="stats1">
              <div className="overlay-title1">{tmpStat5[0]}</div>
              <div className="overlay-stat1">{tmpStat5[1]}</div>
            </div>
            <div className="stats1">
              <div className="overlay-title1">{tmpStat6[0]}</div>
              <div className="overlay-stat1">{tmpStat6[1]}</div>
            </div>
            <div className="stats1">
              <div className="overlay-title1">{tmpStat7[0]}</div>
              <div className="overlay-stat1">{tmpStat7[1]}</div>
            </div>
            <div className="stats1">
              <div className="overlay-title1">{tmpStat8[0]}</div>
              <div className="overlay-stat1">{tmpStat8[1]}</div>
            </div>
            <button onClick={(e) => { saveOverlay() }}>Select This Overlay</button>
          </div>
    </>
  )
}
