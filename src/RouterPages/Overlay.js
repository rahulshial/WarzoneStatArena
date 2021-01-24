import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../overlay.css';
import OverlayNav from '../Overlay/OverlayNav'
import OverlayBar from '../Overlay/OverlayBar';

export default function Overlay() {
  const [state, setState] = useState({
    weeklyData: {},
    gameModes: {},
    gunData: {},
    lifetimeData: {},
    overlaySelected: "Small",
  })


  
  useEffect(() => {
    // let nickname = props.name.replace("#", "%23")
    // nickname will === username
    axios.get(`http://localhost:3030/stats/Nickmercs%2311526&battle`)
      .then(res => {
        if (res.data[0].weeklyData) {
          setState(prev => ({
            ...prev,
            weeklyData: res.data[0],
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))
        } else {
          console.log(res.data[3]);
          setState(prev => ({
            ...prev,
            gameModes: res.data[1],
            gunData: res.data[2],
            lifetimeData: res.data[3],
          }))
        }

      })
      .catch(error => {
        console.log(error);
      })
  }, [])


  const overlaySelected = (index) => {
    const size = ["Small", "Large"]
    setState(prev => ({
      ...prev,
      overlaySelected: size[index]
    }))
  }

  if (Object.keys(state.gameModes).length !== 0) {
    return (
      <div style={{
        backgroundColor: '#222831',
        height: "93.3vh",
      }}>
        <OverlayNav
          onSelect={overlaySelected}
        />
        <OverlayBar
          gameModes={state.gameModes}
          lifetimeData={state.lifetimeData}
          gunData={state.gunData}
          weeklyData={state.weeklyData}
          overlaySize={state.overlaySelected}
        />
      </div>
    )

  } else {
    return (
      <h1>Loading</h1>
    )
  }






}


















//   const overlaySize = () => {
//     if (Object.keys(state.gameModes).length !== 0) {
//       if (Object.keys(state.weeklyData).length > 0){
//         return (

//           <Router>
//             <div>
//             <OverlayNav/>
//               <h2>Choose Overlay To Customize</h2>
//               <ul>
//                 <h1>
//                   <Link to="/Large">Large Overlay</Link>
//                 </h1>

//                 <h1>
//                   <Link to="/Small">Small Overlay</Link>

//                 </h1>
//               </ul>

//               <Switch>

//                 <Route path="/:id" children={<OverlayBar gameModes={state.gameModes} lifetimeData={state.lifetimeData} gunData={state.gunData} />} />

//               </Switch>

//             </div>
//           </Router>
//         )
//       } else {
//         return (
//           <Router>
//             <div>
//             <h1>cats</h1>
//               <h2>Choose Overlay To Customize</h2>
//               <ul>
//                 <h1>
//                   <Link to="/Large">Large Overlay</Link>
//                 </h1>

//                 <h1>
//                   <Link to="/Small">Small Overlay</Link>
//                 </h1>
//               </ul>
//               <Switch>
//                 <Route path="/:id" children={<OverlayBar weeklyData="null" lifetimeData={state.lifetimeData} gunData={state.gunData} />} />
//               </Switch>
//             </div>
//           </Router>
//         )        
//       }
//     }
//   }
//   return (
//     <>
//       {overlaySize()}
//     </>
//   )
// }

