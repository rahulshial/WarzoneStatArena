// dropZone Images for roulette
import stadiumImage from '../img/dropzone_images/stadiumImage.jpg';
import tvImage from '../img/dropzone_images/tvImage.jpg';
import BoneyardImage from '../img/dropzone_images/boneydardImage.jpg';
import damImage from '../img/dropzone_images/damImage.jpg';
import dtImage from '../img/dropzone_images/dtImage.jpg';
import airportImage from '../img/dropzone_images/airportImage.jpg';
import stImage from '../img/dropzone_images/stImage.jpg';
import superstoreImage from '../img/dropzone_images/superstoreImage.jpg';
import quarryImage from '../img/dropzone_images/quarryImage.jpg';
import mbImage from '../img/dropzone_images/mbImage.jpg';
import tsImage from '../img/dropzone_images/tsImage.jpg';
import pwImage from '../img/dropzone_images/pwImage.jpg';
import hospitalImage from '../img/dropzone_images/hospitalImage.jpg';
import peImage from '../img/dropzone_images/peImage.jpg';
import lumberImage from '../img/dropzone_images/lumberImage.jpg';
import prisonImage from '../img/dropzone_images/prisonImage.jpg';
import portImage from '../img/dropzone_images/portImage.jpg';
import boo from'../img/dropzone_images/warzoneMap.jpg';
import fight from "../img/dropzone_images/fight.jpg";
import shotgun from "../img/dropzone_images/shotgun.jpeg";

// different lethal & tactical images
// import claymoreImage from '../img/dropzone_images/boneydardImage.jpg';
// import fragImage from '../img/dropzone_images/damImage.jpg';
// import mcImage from '../img/dropzone_images/dtImage.jpg';
// import c4Image from '../img/dropzone_images/airportImage.jpg';
// import semtexImage from '../img/dropzone_images/stImage.jpg';
// import tkImage from '../img/dropzone_images/superstoreImage.jpg';
// import pmImage from '../img/dropzone_images/quarryImage.jpg';
// import thermiteImage from '../img/dropzone_images/mbImage.jpg';
// import ftkImage from '../img/dropzone_images/tsImage.jpg';
// import fgImage from '../img/dropzone_images/pwImage.jpg';
// import stungImage from '../img/dropzone_images/hospitalImage.jpg';
// import smokegImage from '../img/dropzone_images/peImage.jpg';
// import snapgImage from '../img/dropzone_images/lumberImage.jpg';
// import heartbeatImage from '../img/dropzone_images/prisonImage.jpg';
// import stimImage from '../img/dropzone_images/portImage.jpg';
// import ggImage from '../img/dropzone_images/portImage.jpg';
// import dgImage from'../img/dropzone_images/warzoneMap.jpg';

// ARS images
import ak47 from '../images/guns/ar/ak-47.png';
import asVal from '../images/guns/ar/as-val.png';
import crMax from '../images/guns/ar/cr-56-amax.png';
import fal from '../images/guns/ar/fal.png';
import fnScar from '../images/guns/ar/fn-scar-17.png';
import fr556 from '../images/guns/ar/fr-556.png';
import killo141 from '../images/guns/ar/kilo141.png';
import m13 from '../images/guns/ar/m13.png';
import oden from '../images/guns/ar/oden.png';
import ram7 from '../images/guns/ar/ram-7.png';

// SMGS
import aug from '../images/guns/smg/aug.png';
import fennec from '../images/guns/smg/fennec.png';
import iso from '../images/guns/smg/iso.png';
import mp5 from '../images/guns/smg/mp5.png';
import mp7 from '../images/guns/smg/mp7.png';
import p90 from '../images/guns/smg/p90.png';
import bizon from '../images/guns/smg/pp19-bizon.png';
import striker from '../images/guns/smg/striker-45.png';
import uzi from '../images/guns/smg/uzi.png';

// light machine gun images
import pkm from '../images/guns/lmg/pkm.png'
import mg34 from '../images/guns/lmg/mg34.png'
import sa87 from '../images/guns/lmg/sa87.png'
import finn from '../images/guns/lmg/finn-lmg.png'
import holger from '../images/guns/lmg/holger-26.png'
import m91 from '../images/guns/lmg/m91.png'
import bruen from '../images/guns/lmg/bruen-mk9.png'

// snipers and marksman images
import rytec from '../images/guns/sniper/rytec-amr.png'
import dragunov from '../images/guns/sniper/dragunov.png'
import ax from '../images/guns/sniper/ax-50.png'
import hdr from '../images/guns/sniper/hdr.png'
import mk2 from '../images/guns/marksman/mk2-carbine.png'
import kar from '../images/guns/marksman/kar98k.png'
import crossbow from '../images/guns/marksman/crossbow.png'
import sks from '../images/guns/marksman/sks.png'
import spr from '../images/guns/marksman/sp-r-208.png'

// pistole images
import m19 from '../images/guns/pistol/m19.png'
import p357 from '../images/guns/pistol/357.png'
import p1911 from '../images/guns/pistol/1911.png'
import x16 from '../images/guns/pistol/x16.png'
import gs50 from '../images/guns/pistol/50-gs.png'
import renetti from '../images/guns/pistol/renetti.png'

// launchers images
import rpg from '../images/guns/launcher/rpg-7.png'
import jokr from '../images/guns/launcher/jokr.png'
import pila from '../images/guns/launcher/pila.png'
import strela from '../images/guns/launcher/strela-p.png'

// shotgun images
import m680 from '../images/guns/sg/model-680.png'
import sh725 from '../images/guns/sg/725.png'
import origin from '../images/guns/sg/origin-12-shotgun.png'
import r9 from '../images/guns/sg/r9-0-shotgun.png'
import vlk from '../images/guns/sg/vlk-rogue.png'
import jak12 from '../images/guns/sg/jak-12.png'


// showing different dropZone images based on querry output
function dropzoneImage (drop) {
  if (drop === "Stadium") {
    return stadiumImage
  }
  if (drop === "TV Station") {
    return tvImage
  }
  if (drop === "Boneyard") {
    return BoneyardImage
  }
  if (drop === "Dam") {
    return damImage
  }
  if (drop === "Downtown") {
    return dtImage
  }
  if (drop === "Airport") {
    return airportImage
  }
  if (drop === "Storage Town") {
    return stImage
  }
  if (drop === "Superstore") {
    return superstoreImage
  }
  if (drop === "Quarry") {
    return quarryImage
  }
  if (drop === "Military Base") {
    return mbImage
  }
  if (drop === "Train Station") {
    return tsImage
  }
  if (drop === "Promenade West") {
    return pwImage
  }
  if (drop === "Hospital") {
    return hospitalImage
  }
  if (drop === "Promenade East") {
    return peImage
  }
  if (drop === "Lumber") {
    return lumberImage
  }
  if (drop === "Prison") {
    return prisonImage
  }
  if (drop === "Port") {
    return portImage
  }
 return boo
}

// showing different primaryGunImage based on querry output
function primaryGunImage (primary) {
  if (primary === "MP5") {
    return mp5
  }
  if (primary === "MP7") {
    return mp7
  }
  if (primary === "AUG") {
    return aug
  }
  if (primary === "P90") {
    return p90
  }
  if (primary === "PP19 Bizon") {
    return bizon
  }
  if (primary === "Uzi") {
    return uzi
  }
  if (primary === "Striker 45") {
    return striker
  }
  if (primary === "Fennec") {
    return fennec
  }
  if (primary === "ISO SMG") {
    return iso
  }
  if (primary === "AK47") {
    return ak47
  }
  if (primary === "M13") {
    return m13
  }
  if (primary === "FR 5.5") {
    return fr556
  }
  if (primary === "FN SCAR 17") {
    return fnScar
  }
  if (primary === "FAL") {
    return fal
  }
  if (primary === "RAM-7") {
    return ram7
  }
  if (primary === "CR-56 AMAX") {
    return crMax
  }
  if (primary === "Killo141") {
    return killo141
  }
  if (primary === "Oden") {
    return oden
  }
  if (primary === "AS VAL") {
    return asVal
  }
  if (primary === "Rytec AMR (Barret)") {
    return rytec
  }
  if (primary === "AX-50") {
    return ax
  }
  if (primary === "Draganov") {
    return dragunov
  }
  if (primary === "HDR") {
    return hdr
  }
  if (primary === "EBR-14") {
    return boo
  }
  if (primary === "KAR98K") {
    return kar
  }
  if (primary === "MK2 Carbine") {
    return mk2
  }
  if (primary === "Crossbow") {
    return crossbow
  }
  if (primary === "SKS") {
    return sks
  }
  if (primary === "SP-R 208") {
    return spr
  }

  if (primary === "FiNN") {
    return finn
  }
  if (primary === "M91") {
    return m91
  }
  if (primary === "PKM") {
    return pkm
  }
  if (primary === "MG34") {
    return mg34
  }
  if (primary === "SA87") {
    return sa87
  }
  if (primary === "MK9 Bruen") {
    return bruen
  }
  if (primary === "holger-26") {
    return holger
  }


  

 return fight
}

// showing different secondaryGunImage based on querry output
function secondaryGunImage (secondary) {
  if (secondary === "X16") {
    return x16
  }
  if (secondary === "1911") {
    return p1911
  }
  if (secondary === ".357") {
    return p357
  }
  if (secondary === ".50 GS") {
    return gs50
  }
  if (secondary === "M19") {
    return m19
  }
  if (secondary === "Renetti") {
    return renetti
  }
  if (secondary === "Butterfly Knife") {
    return striker
  }
  if (secondary === "Try Fist") {
    return fennec
  }
  if (secondary === "knife") {
    return iso
  }
  if (secondary === "Axe") {
    return ak47
  }
  if (secondary === "Riot Shield") {
    return m13
  }
  if (secondary === "Model 680") {
    return m680
  }
  if (secondary === "R9-0 Shotgun") {
    return r9
  }
  if (secondary === "725") {
    return sh725
  }
  if (secondary === "Origin 12 Shotgun") {
    return origin
  }
  if (secondary === "VLK Rouge") {
    return vlk
  }
  if (secondary === "JAK-12") {
    return jak12
  }
  if (secondary === "RPG-7") {
    return rpg
  }
  if (secondary === "PILA") {
    return pila
  }
  if (secondary === "JOKR") {
    return jokr
  }
  if (secondary === "Strela-P") {
    return strela
  }
  


  

 return shotgun
}

export {primaryGunImage, dropzoneImage, secondaryGunImage}