import React from "react";


export  const CircleLogo = ({nftName, imgSrc}) =>{
  return (
    <img className={nftName} src={imgSrc} alt={nftName}/>
  )
}