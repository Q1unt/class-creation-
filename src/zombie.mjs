import { Charecter } from "./character.mjs";

class Zombie extends Charecter {
     constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);
     }
}

const zombie = new Zombie('Лена', 'Zombie', 40, 10)

console.log(zombie);