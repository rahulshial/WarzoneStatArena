import React, { useState } from "react";
import "../checkbox.css";
import MediaCard from "./answers";
import useApplicationData from "../hooks/useApplicationData";
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
    getSecondary,
    getPrimaryAttachments,
    getTactical,
  } = useApplicationData();

  

  const [primaryChecked, setPrimaryChecked] = useState(false);
  const [primaryAttachmentChecked, setPrimaryAttachmentChecked] = useState(false);
  const [tacticalLethalChecked, settacticalLethalChecked] = useState(false);
  const [secondaryChecked, setSecondaryChecked] = useState(false);
  const [dropzoneChecked, setDropzoneChecked] = useState(false);
  const [rulesChecked, setRulesChecked] = useState(false);

  const [selected, setSelected] = useState({
    rule: "",
    primary: "",
    primaryClass: "",
    secondary: "",
    secondaryClass: "",
    attachment1:[],
    attachment1Class:[],
    tactical:[],
    tacticalClass:[],
    dropzone: "",
    primaryImage: [],
    secondaryImage: image1,
    dropzoneImage: [],
  });

  function generateRoulette() {
   
 
    Promise.all([getRules(), getPrimary(), getDropZone(), getSecondary(), getPrimaryAttachments(), getTactical()]).then((data) =>{
      console.log(data);
      let primaryGun = data[1].name
      let primaryGunClass = data[1].category
      let primaryGunAttachments = data[4]
      let tacticalAttachment = data[5]
      console.log("Primary Attachments", primaryGunAttachments);

      let secondaryGun = data[3].name
      let secondaryGunClass = data[3].category

      let location  = data[2].name

      let rule = data[0].text

    
      let primAttachments = []
      let primAttachmentsClass = []
      let countAttachment = 0;
      for (const attachment in primaryGunAttachments) {
        
        countAttachment = countAttachment + 1;
        const allAttachments = primaryGunAttachments[attachment];
        primAttachments.push (countAttachment, ". ", allAttachments.attachment_name, ",   ")
        primAttachmentsClass.push (countAttachment, ". ", allAttachments.type, ",  ")
      }

      let tacticalLethal = []
      let tacticalLethalClass = []
      let countTactical = 0;
      for (const tactical in tacticalAttachment) {
        countTactical = countTactical + 1;
        const allTactical = tacticalAttachment[tactical];
        tacticalLethal.push (countTactical, ". ", allTactical.attachment_name, ",   ")
        tacticalLethalClass.push (countTactical, ". ", allTactical.type, ",  ")
      }

       
      
      

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
          primaryClass: primaryGunClass,
          
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          primary: "",
          primaryImage:"",
          primaryClass: ""
        }))
      };

      if (primaryAttachmentChecked) {
        setSelected(prev => ({
          ...prev,
          attachment1: primAttachments,
          attachment1Class: primAttachmentsClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          attachment1: "",
          attachment1Class: ""
        }))
      };

      if (tacticalLethalChecked) {
        setSelected(prev => ({
          ...prev,
          tactical: tacticalLethal,
          tacticalClass: tacticalLethalClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          attachment1: "",
          attachment1Class: ""
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
  }

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
            title="Attachments"
            selected={selected.attachment1}
            class={selected.attachment1Class}
            image={guned}
            checked={primaryAttachmentChecked}
            onChange={() => setPrimaryAttachmentChecked(!primaryAttachmentChecked)}
          />

          <MediaCard
            title='Tactical & Lethal'
            selected={selected.tactical}
            class={selected.tacticalClass}
            image={guned}
            checked={tacticalLethalChecked}
            onChange={() => settacticalLethalChecked(!tacticalLethalChecked)}
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
