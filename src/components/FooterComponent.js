import React from "react";
import Button from "./Button";

export default function FooterComponent(){
  const footerLinks = ['Auctions', 'RoadMap', 'Discover', 'Community']
  return (
    <footer className="footerDiv">
      <div className="nftDiv">
      <h3 className="market">NFT Market </h3>
      </div>
      
      <div className="buttonsDIv">
        {footerLinks.map((item) => <Button styleClass="footerButton" value={item}/>)}     
        <button className="MyAccount">My Account</button>
      </div>

  
      <div className="footerLastSection">
      Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit,
       sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
       
       <button className="inputButton">
       <input className="inputField" type="text"></input>Sign in</button> 
      </div>
    </footer>
  )
}