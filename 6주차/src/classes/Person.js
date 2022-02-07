import { BODIES, HAIRS } from "../data.js";

export default class Person {
  constructor(hairIndex, bodyIndex) {}

  changeHair(index) {}

  changeBody(index) {}

  get hair() {
    return HAIRS[this.#hairIndex];
  }

  get body() {
    return BODIES[this.#bodyIndex];
  }
}
