import { Daemon } from "../daemon";

test("Проверка класса на данные", () => {
    const daemon = new Daemon("daemon", "Daemon")
    const resoult = {
        name: "daemon", 
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    };
    expect(daemon).toEqual(resoult);
});