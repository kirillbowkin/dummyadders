import React from "react";
import FullAdderBoxSvg from "./fullAdderBoxSvg";

function FullAdderBox({ onClickHandler }) {
  return (
    <div
      className="p-4 flex flex-col items-center space-y-12"
      onClick={onClickHandler}
    >
      <FullAdderBoxSvg />
    </div>
  );
}

export default FullAdderBox;
