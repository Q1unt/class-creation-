import { Charecter } from "./character.mjs";

class Daemon extends Charecter {
    constructor(name, type, health, level, attack, defence) {
        super(name, type, health, level, attack, defence);
    }
}

const daemon = new Daemon('Настя', 'Daemon', 10, 40)

console.log(daemon);