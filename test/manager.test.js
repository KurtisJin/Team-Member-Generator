const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Luffy", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Sanji", testValue, "test@test.com", 1);
    expect(e.getId()).toBe(testValue);
})

test("Can set office number via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Sanji", 1, testValue, 1);
    expect(e.getEmail()).toBe(testValue);
})

test("Can set office number via constructor argument", () => {
    const testValue = String;
    const e = new Manager(testValue, 1, "test@test.com", 1);
    expect(e.getName()).toBe(testValue);
})