export class Charecter{
    constructor(name, type) {
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if (name.length < 2 || name.length > 10) {
            throw new Error('Введите имя от 2 до 10 символов')
        };
        if(!types.includes(type)) {
            throw new Error(`Введите одно из этих типов данных, ${types}`)
        };
        
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    };
};