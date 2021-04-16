const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

test("Can set school via constructor argument", () => {
    const testValue = String;
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
})

test("Can set school via constructor argument", () => {
    const testValue = String;
    const e = new Intern(testValue, 1, "test@test.com", "school");
    expect(e.getName()).toBe(testValue);
})

test("Can set school via constructor argument", () => {
    const testValue = 1;
    const e = new Intern("Foo", testValue, "test@test.com", "school");
    expect(e.getId()).toBe(testValue);
})

test("Can set school via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue, "school");
    expect(e.getEmail()).toBe(testValue);
})
