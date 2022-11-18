import React from "react";
import Button from "./Button";
import { baldeImage, trescoresImage } from "../utils/constImages";

function Content() {

  return (
    
    <section>
      <h2> Sapien ipsum Scelerisque convallis fusce</h2>
      <p>Ut amet...(nao esquecer de preencher)</p>
      <Button value="Get Started"/>
      <Button value="Learm more"/>
      <img src={trescoresImage} alt="trescores"/>
      <img src={baldeImage} alt="balde"/>
    </section>
  )
}

export default Content;