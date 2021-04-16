const Employee = require("../lib/employee");
const Intern = require("../lib/engineer");
// const { hasUncaughtExceptionCaptureCallback } = require('node:process');

test("Can set office number via constructor argument", () => {
    const testValue = String;
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
})