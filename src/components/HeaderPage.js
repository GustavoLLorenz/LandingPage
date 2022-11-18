import React from "react";
import Button from "./Button";
import '../css/style.css'

export default function HeaderPage(){
  const pages = ['Auctions','Roadmap','Discover','Community', 'Contact', 'My account']
  return (
    <header className="headerComponent">
      {pages.map((item) => <Button className="headerButton" value={item}/>)}
    </header>
  )
}