import React, { useState } from "react";
import "../checkbox.css";
import MediaCard from "./answers";
import useApplicationData from "../hooks/useApplicationData";
import image1 from "../img/trainstation-secondary.png";
import heartbeat from '../img/dropzone_images/heartbeat.jpg';
import mags from '../img/dropzone_images/mags.jpg';
import ruled from "../img/ruled.jpg";
import mine from "../img/mine1.png";
import {dropzoneImage, primaryGunImage, secondaryGunImage} from './dropzoneImage'

export default function Roulette() {
  const {
    getDropZone,
    getRules,
    getPrimary,
    getSecondary,
    getPrimaryAttachments,
    getTactical,
  } = useApplicationData();

  
  // states to check for checked or unchecked cards of the roulette
  const [primaryChecked, setPrimaryChecked] = useState(false);
  const [GunAttachmentsChecked, setGunAttachmentsChecked] = useState(false);
  const [tacticalLethalChecked, settacticalLethalChecked] = useState(false);
  const [secondaryChecked, setSecondaryChecked] = useState(false);
  const [dropzoneChecked, setDropzoneChecked] = useState(false);
  const [rulesChecked, setRulesChecked] = useState(false);

  // state for roulette data when checked
  const [selected, setSelected] = useState({
    rule: "",
    primary: "",
    primaryClass: "",
    secondary: "",
    secondaryClass: "",
    attachment:[],
    attachmentClass:[],
    tactical:[],
    tacticalClass:[],
    dropzone: "",
  });

  // random roullete data generator function
  function generateRoulette() {

    // grabbing all querry data from stat server by functions imported from useApplicationData helper function
    Promise.all([getRules(), getPrimary(), getDropZone(), getSecondary(), getPrimaryAttachments(), getTactical()]).then((data) =>{
      // primary gun 
      let primaryGun = data[1].name
      let primaryGunClass = data[1].category

      // attachments
      let GunAttachments = data[4]
      let tacticalAttachment = data[5]
      
      // secondary gun
      let secondaryGun = data[3].name
      let secondaryGunClass = data[3].category

      // dropzone
      let location  = data[2].name

      // rules
      let rule = data[0].text

      // setting state for more than one gun attachments and styling them better
      let GunAttachment = []
      let GunAttachmentClass = []
      let countAttachment = 0;
      for (const attachment in GunAttachments) {
        countAttachment = countAttachment + 1;
        const allAttachments = GunAttachments[attachment];
        GunAttachment.push (countAttachment, ". ", allAttachments.attachment_name, ",   ")
        GunAttachmentClass.push (countAttachment, ". ", allAttachments.type, ",  ")
      }

      // setting state for lethal & tactical attachments and styling them better
      let tacticalLethal = []
      let tacticalLethalClass = []
      let countTactical = 0;
      for (const tactical in tacticalAttachment) {
        countTactical = countTactical + 1;
        const allTactical = tacticalAttachment[tactical];
        tacticalLethal.push (countTactical, ". ", allTactical.attachment_name, ",   ")
        tacticalLethalClass.push (countTactical, ". ", allTactical.type, ",  ")
      }

       
      
      
      // checking for state of checked checkboxes
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
          primaryClass: primaryGunClass,
          
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          primary: "",
          primaryClass: ""
        }))
      };

      if (GunAttachmentsChecked) {
        setSelected(prev => ({
          ...prev,
          attachment: GunAttachment,
          attachmentClass: GunAttachmentClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          attachment: "",
          attachmentClass: ""
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
          tactical: "",
          tacticalClass: ""
        }))
      };
      

      if (secondaryChecked) {
        setSelected(prev => ({
          ...prev,
          secondary: secondaryGun,
          secondaryClass: secondaryGunClass
        }))
      } else {
        setSelected(prev => ({
          ...prev,
          secondary: "",
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
            image={primaryGunImage(selected.primary)}
            checked={primaryChecked}
            onChange={() => setPrimaryChecked(!primaryChecked)}
          />

          <MediaCard
            title="Secondary Gun"
            selected={selected.secondary}
            class={selected.secondaryClass}
            image={secondaryGunImage(selected.secondary)}
            checked={secondaryChecked}
            onChange={() => setSecondaryChecked(!secondaryChecked)}
          />
        </div>
        <div>
          <MediaCard
            title="Attachments"
            selected={selected.attachment}
            class={selected.attachmentClass}
            image={mags}
            checked={GunAttachmentsChecked}
            onChange={() => setGunAttachmentsChecked(!GunAttachmentsChecked)}
          />

          <MediaCard
            title='Tactical & Lethal'
            selected={selected.tactical}
            class={selected.tacticalClass}
            image={heartbeat}
            checked={tacticalLethalChecked}
            onChange={() => settacticalLethalChecked(!tacticalLethalChecked)}
          />
        </div>

        <div>
          <MediaCard
            title="Drop Zone"
            selected={selected.dropzone}
            image={dropzoneImage(selected.dropzone)}
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
