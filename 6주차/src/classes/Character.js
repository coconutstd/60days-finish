import { ABILITY, JOB } from "../data.js";
import Person from "./Person.js";

export default class Character {
  constructor({ job, ability, hair, body }) {}

  changeJob(job) {}

  changeAbility(ability) {}

  get introduction() {
    return `
      내 직업은 '${JOB[this.job]}'이야. 
      특기는 '${ABILITY[this.ability]}'이지. 
      난 몸이 ${this.body} 한편이야. 
      그리고 머리스타일이 ${this.hair}하지.
    `;
  }

  showOff() {
    alert(`나는 최고의 ${this.job}이야!`);
  }

  showSkill() {
    alert(`간다! ${this.ability}!!`);
  }
}
