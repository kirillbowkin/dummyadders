import React from "react";
import HalfAdderBoxSvg from "./halfAdderBoxSvg";

export default function HalfAdderBox({ onClickHandler }) {
  return (
    <div
      className="p-4 flex flex-col items-center space-y-12"
      onClick={onClickHandler}
    >
      <HalfAdderBoxSvg />
    </div>
  );
}
