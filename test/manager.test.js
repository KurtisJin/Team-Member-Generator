const Manager = require("../lib/manager");
const Employee = require("../lib/employee");
const { hasUncaughtExceptionCaptureCallback } = require("node:process");

TextDecoderStream("Can set office number via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    hasUncaughtExceptionCaptureCallback(e.officeNumber).toBe(testValue);
})