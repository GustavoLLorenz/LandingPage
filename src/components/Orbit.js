import React from "react";
import {orbitaimage1Image, orbitaimage2Image, orbitaimage3Image,
orbitaimage4Image,orbitaimage5Image,orbitaimage6Image,VectorImage,
Vector2Image,Vector3Image, Vector4Image} from '../utils/constImages'

export default function Orbit(){
  return (
    <div>
      <div className="Pcirculo"> 
      
      <h1 className="nftTItle">A new NFT EXperience</h1></div>
      
      <div className="Scirculo"/>
      <div className="Tcirculo"/>
      <div className="Qcirculo"/>

      <img  className="papagaio" src={orbitaimage6Image}/>
      <img className="sapo" src={orbitaimage1Image}/>
      {/* <img src={orbitaimage2Image}/> */}
      <img className="tigre" src={orbitaimage3Image}/>
      <img className="cobra"src={orbitaimage4Image}/>
      <img className="lobo" src={orbitaimage5Image}/>
     
     <div className="circleBottom">
     <img  src={VectorImage}/>
      <img src={Vector2Image}/>
      <img src={Vector3Image}/>
      <img src={Vector4Image}/>
     </div>
   

      
      
      
      
    </div>
  )
}