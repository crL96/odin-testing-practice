const capitalize = require("./capitalize.js")

test("name string", () => {
    expect(capitalize("carl")).toBe("Carl");
});

test("Multiple word string", () => {
    expect(capitalize("hello, there")).toBe("Hello, there");
});