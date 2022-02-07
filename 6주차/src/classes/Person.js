import { BODIES, HAIRS } from "../data.js";

export default class Person {
  #hairIndex = null;
  #bodyIndex = null;

  constructor(hairIndex = 0, bodyIndex = 0) {
    this.#hairIndex = hairIndex;
    this.#bodyIndex = bodyIndex;
  }

  changeHair(index) {
    this.#hairIndex = index;
  }

  changeBody(index) {
    this.#bodyIndex = index;
  }

  get hair() {
    return HAIRS[this.#hairIndex];
  }

  get body() {
    return BODIES[this.#bodyIndex];
  }
}
