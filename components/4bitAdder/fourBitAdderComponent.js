import React from "react";
import FourBitAdderCircuit from "./fourBitAdderCircuit";
import FourBitAdderDashboard from "./fourBitAdderDashboard";
import { Button } from "@material-ui/core";
import fourBitAdder from "../../store/FourBitAdder";

function FourBitAdderComponent() {
  return (
    <>
      <p className="text-3xl">Cool Binary 4 Bit Adder</p>
      <FourBitAdderCircuit />
      <FourBitAdderDashboard />
      <Button variant="contained" onClick={() => fourBitAdder.reset()}>
        Reset
      </Button>
    </>
  );
}

export default FourBitAdderComponent;
