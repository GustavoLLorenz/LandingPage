import React from "react";
import {orbitaimage1Image, orbitaimage2Image, orbitaimage3Image,
orbitaimage4Image,orbitaimage5Image,orbitaimage6Image,VectorImage,
Vector2Image,Vector3Image, Vector4Image} from '../utils/constImages'

export default function Orbit(){
  return (
    <div>
      <img src={orbitaimage1Image}/>
      <img src={orbitaimage2Image}/>
      <img src={orbitaimage3Image}/>
      <img src={orbitaimage4Image}/>
      <img src={orbitaimage5Image}/>
      <img src={orbitaimage6Image}/>


      <h1>A new NFT EXperience</h1>

      <img src={VectorImage}/>
      <img src={Vector2Image}/>
      <img src={Vector3Image}/>
      <img src={Vector4Image}/>
    </div>
  )
}