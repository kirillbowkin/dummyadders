import { Button } from "@material-ui/core";
import React, { useState } from "react";
import HalfAdderBox from "./halfAdderBox";

import HalfAdderCircuit from "./halfAdderCircuit";
import HalfAdderDashboard from "./halfAdderDashboard";

import halfAdder from "../../store/HalfAdder";

function HalfAdderComponent() {
  const [isCircuit, setIsCircuit] = useState(true);
  return (
    <>
      <p className="text-3xl">Cool Binary Half Adder</p>
      <p className="text-xl">Click on the pic below to change view</p>
      {isCircuit ? (
        <HalfAdderCircuit onClickHandler={() => setIsCircuit(!isCircuit)} />
      ) : (
        <HalfAdderBox onClickHandler={() => setIsCircuit(!isCircuit)} />
      )}
      <HalfAdderDashboard />
      <Button variant="contained" onClick={() => halfAdder.reset()}>
        Reset
      </Button>
    </>
  );
}

export default HalfAdderComponent;
