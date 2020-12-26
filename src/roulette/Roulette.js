import React, { useState } from "react";
import "../checkbox.css";
import SwitchesSize from "./checkbox";
import MediaCard from "./answers";
import useApplicationData from "../hooks/useApplicationData";
import ClassesNesting from "./rouletteButton";
import image from "../img/trainstation-weapon.jpeg";
import image1 from "../img/trainstation-secondary.png";
import drop from "../img/droped.jpeg";
import guned from "../img/loadout.jpg";
import ruled from "../img/ruled.jpg";
import mine from "../img/mine1.png";
export default function Roulette(props) {


  const {
    state,
  } = useApplicationData();

  const[primaryChecked, setPrimaryChecked] = useState(false)
  const[secondaryChecked, setSecondaryChecked] = useState(false)
  const[dropzoneChecked, setDropzoneChecked] = useState(false)
  const[rulesChecked, setRulesChecked] = useState(false)
 
  const[selected, setSelected] = useState({
    rule:[],
    primary:[],
    primaryClass:[],
    secondary:[],
    dropzone:[],
    primaryImage:image,
    secondaryImage:image1,
    dropzoneImage:image
  })
  
  
  function generateRoulette(props) {
    //data
    let weapon = state.guns;
    let rules = state.rules;
    let dropzone = state.dropzone;

    //Primary Weapon
    let allowableChars1 = Math.floor(Math.random()*weapon.length);
    const primary = weapon[allowableChars1]
    if (primaryChecked) {
      setSelected(prev => ({
        ...prev,
        primary: primary.weapon,
        primaryClass: primary.class

      
      }))

      
    }
  

    //Secondary Weapon
     let allowableChars2 = Math.floor(Math.random()*weapon.length);
    let secondary;
    if (allowableChars1 !== allowableChars2) {
      secondary = weapon[allowableChars2]
    } else {
      secondary = "any secondary Gun"
    };
    console.log(secondary.image)
    if (secondaryChecked) {
      setSelected(prev => ({
        ...prev,
        secondary: secondary.weapon,
        
      }))
    } 
    
  

    //dropZones
    let allowableChars = Math.floor(Math.random()*dropzone.length);
    const dropZones = dropzone[allowableChars]
    if (dropzoneChecked) {
      setSelected(prev => ({
        ...prev,
        dropzone:dropZones.dropzone
      }))
    }

    
    //rules
    let allowableChars3 = Math.floor(Math.random()*rules.length);
    const rule = rules[allowableChars3];
    if (rulesChecked) {
      
      setSelected(prev => ({
        ...prev,
        rule:rule.rules,
      }))
    } 

  }
  console.log(selected.secondaryImage);
  return (
    <div className="Roulette">
      <div className="checkbox">
       {/*  <div>
        <SwitchesSize 
            checked={primaryChecked}
            onChange = {() => setPrimaryChecked(!primaryChecked)}
            label="Primary Gun"/>

          <SwitchesSize 
            checked={secondaryChecked}
            onChange = {() => setSecondaryChecked(!secondaryChecked)}
            label="Secondary Gun"/>
        </div>
        <div>
        <SwitchesSize
            className="size"
            checked={dropzoneChecked}
            onChange = {() => setDropzoneChecked(!dropzoneChecked)}
            label="dropzone"/>

          <SwitchesSize 
            checked={rulesChecked}
            onChange = {() => setRulesChecked(!rulesChecked)}
            label="Rule"/>
        </div> */}
        {/* <div>
          <ClassesNesting className="button" onClick={generateRoulette}/>
        </div>  */} 
      </div>
      
        <div className="answers">
          <div className="test">
            <MediaCard title= "Primary Gun" selected={selected.primary} class= {selected.primaryClass} image={guned} checked={primaryChecked}
            onChange = {() => setPrimaryChecked(!primaryChecked)}/>

            <MediaCard title= "Secondary Gun" selected= {selected.secondary} image={guned} checked={secondaryChecked}
            onChange = {() => setSecondaryChecked(!secondaryChecked)}/>
          </div>
          Press on the Proximity Mine bellow to roll
          <div>
            <MediaCard title= "Drop Zone" selected= {selected.dropzone} image={drop} className="size"
            checked={dropzoneChecked}
            onChange = {() => setDropzoneChecked(!dropzoneChecked)}/>
                
            <MediaCard title= "Rules" selected= {selected.rule} image={ruled} checked={rulesChecked}
            onChange = {() => setRulesChecked(!rulesChecked)}/>
           
          </div>
        </div>
        <div className="checkbox">
        
            <img className="button" src={mine} onClick={generateRoulette}></img>
          
        </div> 
    </div>
    
  )
}