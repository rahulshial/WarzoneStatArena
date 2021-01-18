
export default function DropDown(props) {

  const { allData, category, overlaySize } = props;
  // console.log(allData);
  console.log(category);
  // console.log(overlaySize);

  const weeklyData = allData[0]
  const gameModes = allData[1]
  const guns = allData[2]

  // console.log(guns);

  const statsToShow = () => {

    if (overlaySize === "large") {


    } else if (overlaySize === "medium") {

    }
  }

  const catToShow = () => {
    if (overlaySize === "large") {


      // NOTHING RN...



    } else if (overlaySize === "medium") {
      let index = -1;
      if (category === "guns") {
        const randArry = [];
        for (const gun of Object.values(guns)) {
          for (const i in gun) {
            index++
            randArry.push(<option style={{ fontWeight: 'bold' }} id={`cat${index}`} value={i}>{i}</option>)
          }
        }
        return randArry;
      }
    }
  }



  return (
    <>
      <div>
        <h4>Choose Cat</h4>
        <select
          name="stats-cat"
          onChange={(e) => {console.log(e.target.value)}}
        >
          {catToShow()}
        </select>
        <h4>Select Stat</h4>
        <select
          name="stats"
        >
          {statsToShow()}
        </select>
      </div>
    </>
  );
}




// if (category === "guns") {
//   const randArry = [];
//   for (const gun of Object.values(guns)) {
//     for (const i in gun) {
//       randArry.push(<option style={{ fontWeight: 'bold' }} value="Stat">{i}</option>)
//       randArry.push(<hr />)
//       // console.log(gun[i]);
//       for (const wep in gun[i]) {
//         randArry.push(<option style={{ fontWeight: 'bold' }} value="Stat">{wep}</option>)
//         randArry.push(<hr />)
//         for (const stat in gun[i][wep].properties) {
//           randArry.push(<option value="Stat">{`${stat}: ${gun[i][wep].properties[stat]}`}</option>)
//         }
//       }
//     }
//   }
//   return randArry;
// }
