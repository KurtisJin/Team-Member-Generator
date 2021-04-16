const { describe } = require('yargs');
const Employee = require('../lib/employee')


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor argument", () => {
    const testValue = String;
    const e = new Employee(testValue , 1, "test@test.com", "Employee");
    expect(e.getName()).toBe(testValue);
})

test("Can set ID via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue, "test@test.com", "Employee");
    expect(e.getId()).toBe(testValue);
})

test("Can set Email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue, "Employee");
    expect(e.getEmail()).toBe(testValue);
})

test("Can set Role via constructor argument", () => {
    const testValue = "Employee";
    const e = new Employee("Foo", 1, "test@test.com", testValue);
    expect(e.getRole()).toBe(testValue);
})





