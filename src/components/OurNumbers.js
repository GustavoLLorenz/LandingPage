import React from "react";
import { numbersData } from "../utils/InfoMock";
import NumbersComponent from "./NumbersComponent"

export default function OurNumbers() {
  return (
    <section className="ourNumbers">
      {numbersData.map((item) => <NumbersComponent value={item.value} info={item.info}/>)}
    </section>
  )
}