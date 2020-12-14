



export default function DropDown(props) {

  return (
    <form>
      <label for="guns">Choose Gun: </label>

      <select 
        name="guns" 
        id="guns"
        onChange={props.selected}
      >
          <option value="iw8_ar_akilo47">AK47</option>
          <option value="iw8_ar_kilo433">Kilo433</option>
          <option value="iw8_ar_falima">falima</option>
          <option value="iw8_ar_anovember94">november</option>
          <option value="iw8_ar_asierra12">sierra12</option>
          <option value="iw8_ar_falpha">falpha</option>
          <option value="iw8_ar_falima">FAL</option>
          <option value="iw8_ar_galima">galima</option>
          <option value="iw8_ar_mcharlie">mcharlie</option>
          <option value="iw8_ar_mike4">mike4</option>
          <option value="iw8_ar_scharlie">Kilo433</option>
          <option value="iw8_ar_sierra552">sierra552</option>
          <option value="iw8_ar_tango21">tango21</option>
          <option value="iw8_ar_valpha">valpha</option>

      </select>
      <br/>
        <input type="submit" value="Submit"/>
    </form>
  );


}



{/* <form onSubmit={submitForm}>
        <label>
          ENTER GUN
          <br/>
          <input type="text" value={state.value}
            onChange={event => setState(prev => ({
              ...prev,
              value: event.target.value
            }))}
          />
        </label>
        <input type="submit" value="Submit" />
      </form> */}