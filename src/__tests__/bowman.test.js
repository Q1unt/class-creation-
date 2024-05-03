import { Bowman } from "../bowman.js";

test("Проверка класса на данные", () => {
    const bowerman = new Bowman("Bowman", "Bowman")
    const resoult = {
        name: "Bowman",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(bowerman).toEqual(resoult)
});