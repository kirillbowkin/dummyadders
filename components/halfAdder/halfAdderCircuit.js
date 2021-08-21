import React from "react";
import HalfAdderCircuitSvg from "./halfAdderCircuitSvg";

export default function HalfAdderCircuit({ onClickHandler }) {
  return (
    <div
      className="p-4 flex flex-col items-center space-y-12"
      onClick={onClickHandler}
    >
      <HalfAdderCircuitSvg />
    </div>
  );
}
