import { makeAutoObservable } from "mobx";

class HalfAdder {
  A = 0;
  B = 0;
  sum = 0;
  carry = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add(a, b) {
    // console.log("a", a);
    // console.log("b", b);
    this.sum = a ^ b;
    this.carry = a && b;
    // console.log("sum", this.sum);
    // console.log("carry", this.carry);
  }

  setA(A) {
    this.A = A;
  }

  setB(B) {
    this.B = B;
  }

  reset() {
    this.A = 0;
    this.B = 0;
    this.sum = 0;
    this.carry = 0;
  }
}

export default new HalfAdder();
