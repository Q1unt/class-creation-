import { Magician } from "../magician";

test("Проверка класса на данные", () => {
    const magician = new Magician("magician", "Magician")
    const resoult = {
        name: "magician",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    };
    expect(magician).toEqual(resoult)
});
