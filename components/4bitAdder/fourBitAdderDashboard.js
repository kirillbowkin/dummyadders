import Bulb from "../bulb";
import SwitchButton from "../switchButton";
import fourBitAdder from "../../store/FourBitAdder";
import React from "react";
import { observer } from "mobx-react-lite";

const FourBitAdderDashboard = observer(() => {
  return (
    <div>
      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.A1}
            clickCallback={() => {
              fourBitAdder.setA1(!fourBitAdder.A1);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">A1</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.A2}
            clickCallback={() => {
              fourBitAdder.setA2(!fourBitAdder.A2);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">A2</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.A3}
            clickCallback={() => {
              fourBitAdder.setA3(!fourBitAdder.A3);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">A3</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.A4}
            clickCallback={() => {
              fourBitAdder.setA4(!fourBitAdder.A4);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">A4</p>
        </div>
      </div>

      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.B1}
            clickCallback={() => {
              fourBitAdder.setB1(!fourBitAdder.B1);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">B1</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.B2}
            clickCallback={() => {
              fourBitAdder.setB2(!fourBitAdder.B2);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">B2</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.B3}
            clickCallback={() => {
              fourBitAdder.setB3(!fourBitAdder.B3);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">B3</p>
        </div>
        <div className="flex items-center">
          <SwitchButton
            isOn={fourBitAdder.B4}
            clickCallback={() => {
              fourBitAdder.setB4(!fourBitAdder.B4);
              fourBitAdder.add();
            }}
          />
          <p className="text-2xl font-semibold">B4</p>
        </div>
      </div>

      <div className="flex space-x-16 space-x-reverse flex-row-reverse mt-3 items-center mr-8">
        <div>
          <Bulb isOn={fourBitAdder.S1} />
        </div>
        <div>
          <Bulb isOn={fourBitAdder.S2} />
        </div>
        <div>
          <Bulb isOn={fourBitAdder.S3} />
        </div>
        <div>
          <Bulb isOn={fourBitAdder.S4} />
        </div>
        <div>
          <Bulb isOn={fourBitAdder.Co} />
        </div>
      </div>

      <div className="mt-5 flex space-x-32 space-x-reverse flex-row-reverse mr-12">
        <p className="text-lg font-semibold">S1</p>
        <p className="text-lg font-semibold">S2</p>
        <p className="text-lg font-semibold">S3</p>
        <p className="text-lg font-semibold">S4</p>
        <p className="text-lg font-semibold">Co</p>
      </div>
    </div>
  );
});

export default FourBitAdderDashboard;
