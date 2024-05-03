import { Zombie } from "../zombie";

test("Проверка класса на данные", () => {
    const zombie = new Zombie("zombie", "Zombie")
    const resoult = {
        name: "zombie",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(zombie).toEqual(resoult);
});