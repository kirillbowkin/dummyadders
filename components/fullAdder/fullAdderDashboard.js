import Bulb from "../bulb";
import SwitchButton from "../switchButton";
import fullAdder from "../../store/FullAdder";
import React from "react";
import { observer } from "mobx-react-lite";

const FullAdderDashboard = observer(() => {
  return (
    <div>
      <div className="pl-20 flex items-center">
        <SwitchButton
          isOn={fullAdder.Cin}
          clickCallback={() => {
            fullAdder.setCin(!fullAdder.Cin);
            fullAdder.add(fullAdder.A, fullAdder.B, fullAdder.Cin);
          }}
        />
        <p className="text-2xl font-semibold">Cin</p>
      </div>
      <div className="pl-20 flex items-center">
        <SwitchButton
          isOn={fullAdder.A}
          clickCallback={() => {
            fullAdder.setA(!fullAdder.A);
            fullAdder.add(fullAdder.A, fullAdder.B, fullAdder.Cin);
          }}
        />
        <p className="text-2xl font-semibold">A</p>
      </div>
      <div className="pl-20 flex items-center">
        <SwitchButton
          isOn={fullAdder.B}
          clickCallback={() => {
            fullAdder.setB(!fullAdder.B);
            fullAdder.add(fullAdder.A, fullAdder.B, fullAdder.Cin);
          }}
        />
        <p className="text-2xl font-semibold">B</p>
      </div>
      <div className="pr-7 flex flex-row-reverse mt-3">
        <Bulb isOn={fullAdder.sum} />
        <Bulb isOn={fullAdder.Cout} />
      </div>
      <div className="mt-5 flex space-x-12 space-x-reverse flex-row-reverse pr-12">
        <p className="text-lg font-semibold">Sum</p>
        <p className="text-lg font-semibold">Carry</p>
      </div>
    </div>
  );
});

export default FullAdderDashboard;
