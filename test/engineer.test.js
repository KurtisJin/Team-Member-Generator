const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
// const { hasUncaughtExceptionCaptureCallback } = require('node:process');

test("Can set Engineer github via constructor argument", () => {
    const testValue = "userID";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
})

test("Can set Engineer Role via constructor argument", () => {
    const testValue = String;
    const e = new Engineer(testValue, 1, "test@test.com", "Engineer")
    expect(e.getName()).toBe(testValue);
})

test("Can set Engineer ID via constructor argument", () => {
    const testValue = 100;
    const e = new Engineer("bob", testValue, "test@test.com", "Engineer")
    expect(e.getId()).toBe(testValue);
})