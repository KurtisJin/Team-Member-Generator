const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
const { hasUncaughtExceptionCaptureCallback } = require('node:process');

TextDecoderStream("Can set github via constructor argument", () => {
    const testValue = String;
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    hasUncaughtExceptionCaptureCallback(e.github).toBe(testValue);
})
