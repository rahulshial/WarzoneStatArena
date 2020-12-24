import React from 'react'
import StatCard from '../StatCard.js'



export default function Profile(props) {
  const storedFavs = localStorage.getItem("name")

  const gunsArr = JSON.parse(storedFavs)
  
  const favItems = gunsArr.map((fav) => {

    return (
      <StatCard
      hits={fav.hits}
      kills={fav.kills}
      kd={fav.kd}
      headshots={fav.headshots}
      accuracy={fav.accuracy}
      shots={fav.shots}
    />
    )
  })
  return (
    <>
      {favItems}
    </>
  )
}
