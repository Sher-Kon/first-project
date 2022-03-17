const sayHello = require('./function');

it ('Создаёт приветствие', () => {
    expect(sayHello("Стася", "Басова")).toBe("Здравствуйте, дорогая Стася Басова!");
}); 