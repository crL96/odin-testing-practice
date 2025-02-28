const reverseString = require("./reverseString.js");

test("one word string", () => {
    expect(reverseString("carl")).toBe("lrac");
});

test("multi word string", () => {
    expect(reverseString("Unit testing is good practice")).toBe("ecitcarp doog si gnitset tinU");
});