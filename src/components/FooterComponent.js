import React from "react";
import Button from "./Button";

export default function FooterComponent(){
  const footerLinks = ['auctions', 'RoadMap', 'Discover', 'Community', 'My Account']
  return (
    <footer>
      <h3>NFT Market </h3>
      <div>
        {footerLinks.map((item) => <Button value={item}/>)}     
      </div>
  
      <div>
      Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit,
       sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
       <input type="text"></input>
       <button>Sign in</button> 
      </div>
    </footer>
  )
}