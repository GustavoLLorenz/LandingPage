import React from "react";
import NumbersComponent from "./NumbersComponent"

export default function OurNumbers() {
  return (
    <section className="ourNumbers">
      <div>
        <NumbersComponent className="numbers" value="300k"/>
        <p className="info">Users active</p>
      </div>
      <div>
        <NumbersComponent className="numbers"  value="52,5k"/>
        <p className="info" >Artworks</p>
      </div>
      <div>
        <NumbersComponent className="numbers"  value="17,5k"/>
        <p className="info">Artists</p>
      </div>
      <div>
      <NumbersComponent className="numbers"  value="35.58"/>
      <p className="info">ETH spent</p>
      </div>
   
    </section>
  )
}