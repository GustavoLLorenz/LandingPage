import React from "react";
import '../css/style.css'
//import logo from "../images/logo.png"
import { HearthImage } from "../utils/constImages";
import { clockImage } from "../utils/constImages";

function Card({customText,value,buttonText,timeStamp,logo,personIcon,personIcon1,personIcon2}) {
return (
  <li className="cardDiv">
    <div className="divisionCard">
    <img className='cardImage' src={logo} alt="teste"/>
   
   <p className="cardText">{value}</p>
  <button className="cardEth">{buttonText}</button>
  <img className="cardClock" src={clockImage}alt="clock"/>
  <p className="timer">{timeStamp}</p>
  <footer className='cardFooter'>
    <img className="person" src={personIcon} alt="personIcon"/>
    <img className="person" src={personIcon1} alt="personIcon"/>
    <img className="person" src={personIcon2} alt="personIcon"/> 
    <p className="peopleText">{customText}</p>
    <img classname="cardHearth" src={HearthImage} alt="HearImage"/>
  </footer>
      
    </div>
 
 </li>
)
}

export default Card; 