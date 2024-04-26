import { Charecter } from "./character.mjs";

class Swordsman extends Charecter {
     constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
     }
}

const swordsman = new Swordsman('катя', 'Swordsman', 40, 10)

console.log(swordsman)