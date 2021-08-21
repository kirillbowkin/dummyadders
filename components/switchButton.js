import React, { useState } from "react";
import switchOff from "../public/switch-icon-off.png";
import switchOn from "../public/switch-icon-on.png";
import Image from "next/image";
import halfAdder from "../store/HalfAdder";

export default function SwitchButton({ clickCallback, isOn }) {
  return (
    <button
      onClick={() => {
        clickCallback();
      }}
    >
      <Image src={isOn ? switchOn : switchOff} width={100} height={100} />
    </button>
  );
}
