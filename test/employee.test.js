const { hasUncaughtExceptionCaptureCallback } = require('node:process');
const Employee = require('../lib/employee')

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    hasUncaughtExceptionCaptureCallback(typeof(e)).toBe("object");
});