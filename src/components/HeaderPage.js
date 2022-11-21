import React from "react";
import Button from "./Button";
import '../css/style.css'

export default function HeaderPage(){
  const pages = ['Auctions','Roadmap','Discover','Community',/* 'Contact','My account' */]
  return (
    <header className="headerComponent">
    
      {pages.map((item) => <Button styleClass="headerButton" value={item}/>)}
    
      
      <section  className="secondsButtons">
      <Button styleClass="buttonContact" value='Contact'/>
      <Button styleClass="buttonMyAccount" value='My account'/>
      
        
      </section>
    </header>
  )
}