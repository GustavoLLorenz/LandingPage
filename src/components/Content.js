import React from "react";
import Button from "./Button";
import { baldeImage, trescoresImage } from "../utils/constImages";

function Content() {

  return (
    
    <section>
      <h2 className="contentSection"> Sapien ipsum Scelerisque convallis fusce</h2>
      <p className="contentText">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
      <Button  styleClass="buttonGetStartedContent" value="Get Started"/>
      <Button styleClass="buttonLearnMore" value="Learm more"/>
      <img className="balde" src={baldeImage} alt="balde"/>
      <img  className="tresCores" src={trescoresImage} alt="trescores"/>
      
    </section>
  )
}

export default Content;