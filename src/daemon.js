import { Charecter } from "./character.js";

export class Daemon extends Charecter {
    constructor(name, type) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    };
};