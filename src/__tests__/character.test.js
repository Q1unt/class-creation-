import { Charecter } from "../character";

test('Проверка класса на данные', () => {
    const character = new Charecter("character", "Bowman")
    const resoult = {
        name: "character",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: undefined,
        defence: undefined,
    };

    expect(character).toEqual(resoult);
});