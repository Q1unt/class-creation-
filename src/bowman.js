import { Charecter } from "./character.js";

export class Bowman extends Charecter {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;

    };
};