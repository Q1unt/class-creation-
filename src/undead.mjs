import { Charecter } from "./character.mjs";

class Undead extends Charecter {
     constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
     }
}

const undead = new Undead('Лена', 'Undead', 25, 25)

console.log(undead)