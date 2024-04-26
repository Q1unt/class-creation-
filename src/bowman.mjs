import { Charecter } from "./character.mjs";

class Bowman extends Charecter {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
    }
}

const bowman = new Bowman('илья', 'Bowman', 25, 25)

console.log(bowman)