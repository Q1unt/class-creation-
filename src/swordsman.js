import { Charecter } from "./character.js";

export class Swordsman extends Charecter {
     constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
     };
};