const { describe } = require('yargs');
const Employee = require('../lib/employee')

describe("Employee class", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set office number via constructor argument", () => {
        const testValue = 100;
        const e = new Manager("Foo", 1, "test@test.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });
});
