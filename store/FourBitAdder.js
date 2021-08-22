import { makeAutoObservable } from "mobx";

class FourBitAdder {
  A1 = 0;
  A2 = 0;
  A3 = 0;
  A4 = 0;

  B1 = 0;
  B2 = 0;
  B3 = 0;
  B4 = 0;

  S1 = 0;
  S1Co = 0;

  S2 = 0;
  S2Co = 0;

  S3 = 0;
  S3Co = 0;

  S4 = 0;
  Co = 0;

  add() {
    let [sum, carry] = this.fullAdder(0, this.A1, this.B1);
    this.S1 = sum;
    this.S1Co = carry;

    [sum, carry] = this.fullAdder(carry, this.A2, this.B2);
    this.S2 = sum;
    this.S2Co = carry;

    [sum, carry] = this.fullAdder(carry, this.A3, this.B3);
    this.S3 = sum;
    this.S3Co = carry;

    [sum, carry] = this.fullAdder(carry, this.A4, this.B4);
    this.S4 = sum;
    this.Co = carry;
  }

  reset() {
    this.A1 = 0;
    this.A2 = 0;
    this.A3 = 0;
    this.A4 = 0;
    this.B1 = 0;
    this.B2 = 0;
    this.B3 = 0;
    this.B4 = 0;
    this.S1 = 0;
    this.S1Co = 0;
    this.S2 = 0;
    this.S2Co = 0;
    this.S3 = 0;
    this.S3Co = 0;
    this.S4 = 0;
    this.Co = 0;
  }

  fullAdder(Cin, A, B) {
    let sum = Cin ^ A ^ B;
    let carry = (A && B) || (A ^ B && Cin);

    return [sum, carry];
  }

  constructor() {
    makeAutoObservable(this);
  }

  setA1(A1) {
    this.A1 = A1;
  }

  setA2(A2) {
    this.A2 = A2;
  }

  setA3(A3) {
    this.A3 = A3;
  }

  setA4(A4) {
    this.A4 = A4;
  }

  setB1(B1) {
    this.B1 = B1;
  }

  setB2(B2) {
    this.B2 = B2;
  }

  setB3(B3) {
    this.B3 = B3;
  }

  setB4(B4) {
    this.B4 = B4;
  }
}

export default new FourBitAdder();
