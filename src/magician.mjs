import { Charecter } from "./character.mjs";

class Magician extends Charecter {
     constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
     }
}

const magicians = new Magician('катя', 'Swordsman', 40, 10)

console.log(magicians);