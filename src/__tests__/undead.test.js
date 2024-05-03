import { Undead } from "../undead";

test("Проверка класса на данные", () => {
    const undead = new Undead("undead", "Undead")
    const resoult = {
        name: "undead",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };
    expect(undead).toEqual(resoult);
});