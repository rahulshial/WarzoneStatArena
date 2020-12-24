import React from 'react'



export default function Profile(props) {

  const storedFavs = localStorage.getItem("name")

  const gunsArr = JSON.parse(storedFavs)
  
  const favItems = gunsArr.map((fav) => {

    return (
      <h1>{fav.gun}</h1>
    )
  })
  return (
    <>
      {favItems}
    </>
  )
}
