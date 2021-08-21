import { makeAutoObservable } from "mobx";

class FullAdder {
  A = 0;
  B = 0;
  Cin = 0;
  sum = 0;
  Cout = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add(cin, a, b) {
    this.sum = a ^ b ^ cin;
    // console.log(cin, a, b);
    // console.log("sum", this.sum);
    this.Cout = (a && b) || (a ^ b && cin);
  }

  reset() {
    this.A = 0;
    this.B = 0;
    this.Cin = 0;
    this.sum = 0;
    this.Cout = 0;
  }

  setA(A) {
    this.A = A;
  }

  setB(B) {
    this.B = B;
  }

  setCin(Cin) {
    this.Cin = Cin;
  }
}

export default new FullAdder();
