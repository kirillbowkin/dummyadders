import React, { useState } from "react";
import switchOff from "../public/switch-icon-off.png";
import switchOn from "../public/switch-icon-on.png";
import Image from "next/image";

export default function SwitchButton({ clickCallback }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => {
        setIsOn(!isOn);
        clickCallback();
      }}
    >
      <Image src={isOn ? switchOn : switchOff} width={100} height={100} />
    </button>
  );
}
