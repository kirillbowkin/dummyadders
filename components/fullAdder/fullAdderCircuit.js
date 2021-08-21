import React from "react";
import FullAdderCirctuitSvg from "./fullAdderCircuitSvg";

export default function FullAdderCircuit({ onClickHandler }) {
  return (
    <div
      className="p-4 flex flex-col items-center space-y-12"
      onClick={onClickHandler}
    >
      <FullAdderCirctuitSvg />
    </div>
  );
}
