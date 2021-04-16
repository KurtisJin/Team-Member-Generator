const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
})