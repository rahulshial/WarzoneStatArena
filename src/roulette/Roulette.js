import React, { useState } from "react";
import "../checkbox.css";
import MediaCard from "./answers";
import useApplicationData from "../hooks/useApplicationData";
import image from "../img/trainstation-weapon.jpeg";
import image1 from "../img/trainstation-secondary.png";
import drop from "../img/droped.jpeg";
import guned from "../img/loadout.jpg";
import ruled from "../img/ruled.jpg";
import mine from "../img/mine1.png";

export default function Roulette() {
  const {
    getDropZone,
    getRules,
    getPrimary,
    getSecondary
  } = useApplicationData();

  

  const [primaryChecked, setPrimaryChecked] = useState(false);
  const [secondaryChecked, setSecondaryChecked] = useState(false);
  const [dropzoneChecked, setDropzoneChecked] = useState(false);
  const [rulesChecked, setRulesChecked] = useState(false);

  const [selected, setSelected] = useState({
    rule: "",
    primary: "",
    primaryClass: "",
    secondary: "",
    secondaryClass: "",
    // attachment1:[],
    // attachment1Class:[],
    // attachment2:[],
    // attachment2Class:[],
    dropzone: "",
    primaryImage: [],
    secondaryImage: image1,
    dropzoneImage: [],
  });

  function generateRoulette() {
    // if primary_checked and weapon_loaded don't call getGun()
    // else if primary_checked and weapon_not_loaded - call getGun()

    //data
    //let weapon = state.guns;
    // let dropZoneObject = state.dropzone;
    // console.log("DropZoneObject - Function GenRoulette: ", dropZoneObject)
    // let attachments1 = state.attachment1;
    // let attachments2 = state.attachments2;

    //Primary Weapon
    
    // const primary = weapon[allowableChars1]
    // console.log(primary.image);
 
    Promise.all([getRules(), getPrimary(), getDropZone(), getSecondary()]).then((data) =>{

      let primaryGun = data[1].weapon
      let primaryGunClass = data[1].class

      let secondaryGun = data[3].weapon
      let secondaryGunClass = data[3].class

      let location  = data[2].dropzone

      let rule = data[0].rules


      if (dropzoneChecked) {
        
        setSelected(prev => ({
          ...prev,
          dropzone: location,
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          dropzone: "",
        }))
      }

      if (rulesChecked) {
        setSelected((prev) => ({
            ...prev,
            rule: rule,
        }));
      } else {
        setSelected((prev) => ({
          ...prev,
          rule: "",
        }));
      }

      if (primaryChecked) {
        setSelected(prev => ({
          ...prev,
          primary: primaryGun,
          primaryImage:"../img/trainstation-weapon.jpeg",
          primaryClass: primaryGunClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          primary: "",
          primaryImage:"",
          primaryClass: ""
        }))
      };

      if (secondaryChecked) {
        setSelected(prev => ({
          ...prev,
          secondary: secondaryGun,
          secondaryImage:"../img/trainstation-weapon.jpeg",
          secondaryClass: secondaryGunClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          secondary: "",
          secondaryImage:"",
          secondaryClass: ""
        }))
      };

    });


      

   
    // console.log(weapon);
    // let allowableChars1 = Math.floor(Math.random() * weapon.length);
    

    // //Secondary Weapon
    // if (secondaryChecked) {
    //   let allowableChars2 = Math.floor(Math.random() * weapon.length);
    //   let secondary;
    //   if (allowableChars1 !== allowableChars2) {
    //     secondary = weapon[allowableChars2];
    //   } else {
    //     secondary = "any secondary Gun";
    //   }
    //   console.log("Secondary Weapon: ", secondary);
    //   setSelected((prev) => ({
    //     ...prev,
    //     secondary: secondary.weapon,
    //     secondaryClass: secondary.class,
    //   }));
    // }

    /*  //Primary Attachments
     let randomAttachment1 = Math.floor(Math.random()*weapon.length);
     let randomAttachment2 = Math.floor(Math.random()*weapon.length);
     let randomAttachment3 = Math.floor(Math.random()*weapon.length);
     let randomAttachment4 = Math.floor(Math.random()*weapon.length);
     let randomAttachment5 = Math.floor(Math.random()*weapon.length);
 
     const attachmentPrimary1 = attachment1[randomAttachment1]
     const attachmentPrimary2 = attachment1[randomAttachment2]
     const attachmentPrimary3 = attachment1[randomAttachment3]
     const attachmentPrimary4 = attachment1[randomAttachment4]
     const attachmentPrimary5 = attachment1[randomAttachment5]
     const attachments = [attachmentPrimary1, attachmentPrimary2, attachmentPrimary3, attachmentPrimary4, attachmentPrimary5]
     // console.log(primary.image);
     if (attachment1Checked) {
       setSelected(prev => ({
         ...prev,
         attachment1:attachments,
         
       }))
     } */

    /*  //Secondary Attachments
     let randomAttachment6 = Math.floor(Math.random()*weapon.length);
     let randomAttachment7 = Math.floor(Math.random()*weapon.length);
     let randomAttachment8 = Math.floor(Math.random()*weapon.length);
     let randomAttachment9 = Math.floor(Math.random()*weapon.length);
     let randomAttachment = Math.floor(Math.random()*weapon.length);
     const attachmentSecondary1 = attachment1[randomAttachment6]
     const attachmentSecondary2 = attachment1[randomAttachment7]
     const attachmentSecondary3 = attachment1[randomAttachment8]
     const attachmentSecondary4 = attachment1[randomAttachment9]
     const attachmentSecondary5 = attachment1[randomAttachment0]
     const attachments = [attachmentSecondary1, attachmentSecondary2, attachmentSecondary3, attachmentSecondary4, attachmentSecondary5]
     if (attachment2Checked) {
       setSelected(prev => ({
         ...prev,
         secondary: attachmentSecondary.weapon,
         secondaryClass: attachmentSecondary.class
         
       }))
     } */

    //dropZones
    // let allowableChars = Math.floor(Math.random()*dropzone.length);
    // const dropZones = dropzone[allowableChars]
    

    //rules
    // let allowableChars3 = Math.floor(Math.random()*rules.length);
    // const rule = rules[allowableChars3];
   
  }
  //console.log(selected.secondaryImage);
  return (
    <div className="Roulette">
      <p className="test1">Press on the Proximity Mine bellow to roll</p>
      <div className="answers">
        <div>
          <MediaCard
            title="Primary Gun"
            selected={selected.primary}
            class={selected.primaryClass}
            image={guned}
            checked={primaryChecked}
            onChange={() => setPrimaryChecked(!primaryChecked)}
          />

          <MediaCard
            title="Secondary Gun"
            selected={selected.secondary}
            class={selected.secondaryClass}
            image={guned}
            checked={secondaryChecked}
            onChange={() => setSecondaryChecked(!secondaryChecked)}
          />
        </div>
        <div>
          <MediaCard
            title="Primary Attachments"
            selected={selected.primary}
            class={selected.primaryClass}
            image={guned}
            checked={primaryChecked}
            onChange={() => setPrimaryChecked(!primaryChecked)}
          />

          <MediaCard
            title="Secondary Attachments"
            selected={selected.secondary}
            class={selected.secondaryClass}
            image={guned}
            checked={secondaryChecked}
            onChange={() => setSecondaryChecked(!secondaryChecked)}
          />
        </div>

        <div>
          <MediaCard
            title="Drop Zone"
            selected={selected.dropzone}
            image={drop}
            className="size"
            checked={dropzoneChecked}
            onChange={() => setDropzoneChecked(!dropzoneChecked)}
          />

          <MediaCard
            title="Rules"
            selected={selected.rule}
            image={ruled}
            checked={rulesChecked}
            onChange={() => setRulesChecked(!rulesChecked)}
          />
        </div>
      </div>
      <div className="checkbox">
        <img alt="mineButton" className="button" src={mine} onClick={generateRoulette} />
      </div>
    </div>
  );
}
