const caesarCipher = require("./caesarCipher.js")

test("abc -> bcd, all lower", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("xyz -> abc, wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("xYZ -> aBc, wrapping with mixed upper and lower case", () => {
    expect(caesarCipher("xYz", 3)).toBe("aBc");
});

test("'Hello, World!' -> 'Khoor, Zruog!', non-alphabetical unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

