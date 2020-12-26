/* 



export default function generateRoulette(props) {
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
  //console.log(gunsChecked)
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

} */