import React from "react";
import {CircleLogo} from "./CircleLogo";
import { bestNfts, ourPartners } from "../utils/InfoMock";

export default function Orbit(){
  return (
    <div>
       <div className='firstOrbit testorbit'/>
      <div className='secondOrbit testorbit'/>
      <div className='thirdOrbit testorbit' />
      <div className='fourthOrbit testorbit'/>
      <div className='fifthOrbit testorbit'/>
      <div className='sixthOrbit testorbit' />
      <div className='seventhOrbit testorbit'/>
      <div className='eighthOrbit testorbit' />
      <div className='ninethOrbit testorbit' />
     
       <h4 className="TOKEN">NON FUNGIBLE TOKENS</h4> 
      <h1 className="nftTItle">A new NFT EXperience</h1>
      <p className="discover">Discover, collect and sell</p>
      {bestNfts.map((item) => <CircleLogo nftName={item.className} imgSrc={item.src}/>)}
  
      <div className="orbitFooter">
        {ourPartners.map((item) => <CircleLogo nftName={item.className} imgSrc={item.src}/>)}
      </div>
  

    </div>
  )
}