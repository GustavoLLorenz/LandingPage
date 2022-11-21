import React from "react";
import Button from "./Button";

export default function FooterComponent(){
  const nftButtons = ['Support', "Term of service", 'License']
  const footerLinks = ['Auctions', 'RoadMap', 'Discover', 'Community']
  return (
    <footer className="footerDiv">
      <div className="nftDiv">
      <h3 className="market">NFT Market </h3>
      {nftButtons.map((item) => <Button styleClass="nftButton" value={item}/>)}
      </div>
      
      <div className="buttonsDIv">
        {footerLinks.map((item) => <Button styleClass="footerButton" value={item}/>)}     
        <button className="MyAccount">My Account</button>
      </div>

  
      <div className="footerLastSection">
      Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit,
       sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
       <form className="inputField">
       <input className="footerInput" type="text"/>
       <button className="inputButton">Sign in</button>
       </form>
       
      </div>
    </footer>
  )
}