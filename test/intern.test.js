const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

test("Can set github via constructor argument", () => {
    const testValue = String;
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
})
