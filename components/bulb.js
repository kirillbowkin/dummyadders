import Image from "next/image";
import React from "react";
import bulbOn from "../public/bulb-icon-on.png";
import bulbOff from "../public/bulb-icon-off.png";

export default function Bulb({ isOn }) {
  return <Image src={isOn ? bulbOn : bulbOff} width={80} height={80} />;
}
