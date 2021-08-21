import React, { useState } from "react";
import { Button } from "@material-ui/core";
import fullAdder from "../../store/FullAdder";
import FullAdderCircuit from "./fullAdderCircuit";
import FullAdderBox from "./fullAdderBox";
import FullAdderDashboard from "./fullAdderDashboard";

function FullAdderComponent() {
  const [isCircuit, setIsCircuit] = useState(true);
  return (
    <>
      <p className="text-3xl">Cool Binary Full Adder</p>
      <p className="text-xl">Click on the pic below to change view</p>
      {isCircuit ? (
        <FullAdderCircuit onClickHandler={() => setIsCircuit(!isCircuit)} />
      ) : (
        <FullAdderBox onClickHandler={() => setIsCircuit(!isCircuit)} />
      )}
      <FullAdderDashboard />
      <Button variant="contained" onClick={() => fullAdder.reset()}>
        Reset
      </Button>
    </>
  );
}

export default FullAdderComponent;
