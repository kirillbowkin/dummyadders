import { makeAutoObservable } from "mobx";

class DrawerStore {
  currentPage = "Half Adder";

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(page) {
    this.currentPage = page;
  }
}

export default new DrawerStore();
