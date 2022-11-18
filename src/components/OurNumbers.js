import React from "react";
import NumbersComponent from "./NumbersComponent"

export default function OurNumbers() {
  return (
    <section>
      <div>
        <NumbersComponent value="300k"/>
        <p>Users active</p>
      </div>
      <div>
        <NumbersComponent value="52,5k"/>
        <p>Artworks</p>
      </div>
      <div>
        <NumbersComponent value="17,5k"/>
        <p>Artists</p>
      </div>
      <NumbersComponent value="35.58"/>

      <p>ETH spent</p>
    </section>
  )
}