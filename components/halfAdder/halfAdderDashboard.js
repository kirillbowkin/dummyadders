import Bulb from "../bulb";
import SwitchButton from "../switchButton";
import halfAdder from "../../store/HalfAdder";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const HalfAdderDashboard = observer(() => {
  return (
    <div>
      <div className="pl-20 flex items-center">
        <SwitchButton
          isOn={halfAdder.A}
          clickCallback={() => {
            halfAdder.setA(!halfAdder.A);
            halfAdder.add(halfAdder.A, halfAdder.B);
          }}
        />
        <p className="text-2xl font-semibold">A</p>
      </div>
      <div className="pl-20 flex items-center">
        <SwitchButton
          isOn={halfAdder.B}
          clickCallback={() => {
            halfAdder.setB(!halfAdder.B);
            halfAdder.add(halfAdder.A, halfAdder.B);
          }}
        />
        <p className="text-2xl font-semibold">B</p>
      </div>
      <div className="pr-7 flex flex-row-reverse mt-3">
        <Bulb isOn={halfAdder.sum} />
        <Bulb isOn={halfAdder.carry} />
      </div>
      <div className="mt-5 flex space-x-12 space-x-reverse flex-row-reverse pr-12">
        <p className="text-lg font-semibold">Sum</p>
        <p className="text-lg font-semibold">Carry</p>
      </div>
    </div>
  );
});

export default HalfAdderDashboard;
