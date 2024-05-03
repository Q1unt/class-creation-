import { Swordsman } from "../swordsman";

test("Проверка класса на данные", () => {
    const swordsman = new Swordsman("swordsman", "Swordsman")
    const resoult = {
        name: "swordsman",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(swordsman).toEqual(resoult);
});