
export default function DropDown(props) {
  const { allData } = props
  const weeklyData = allData[0]
  const gameModes = allData[1]
  const guns = allData[2]


  return (
    <form>
      <label for="guns">Choose Stat Category</label>
      <select
        name="guns"
        onChange={(e)=> {props.selected(e.target.value)}}
      >
        <option value="weeklyData">Weekly Stats</option>
        <option value="gameModes">Game Modes</option>
        <option value="guns">Gun Stats</option>
      </select>
      <br />
    </form>
  );


}

