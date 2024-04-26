export class Charecter{
    constructor(name, type, attack, defence) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Введите имя от 2 до 10 символов')
        }
        if(!["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].includes(type)){
            throw new Error('Введите одно из этих наименований Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
        }
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}

const charecter = new Charecter("Дима", "Daemon", 10, 10)

console.log(charecter)