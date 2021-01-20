import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function OverlaySelected() {

// const [state, setstate] = useState({
//   stats: {},
//   size: '',
// })


useEffect(() => {
  const lastSegment = window.location.pathname.split("/").pop();
  axios.get(`http://localhost:3030/overlay/show/${lastSegment}`)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}, [])


// if state.size === small Show CSS for small overlay
// we will receive 4 stats back and set the state for stats.stats
// we will show the component with the stats


// else show large
// we will receive 8 stats back and set the state for stats.stats
// we will show the component with the stats



  return (
    <div>
      <h1>Cats</h1>
    </div>
  )
}
