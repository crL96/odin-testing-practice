const calculator = require("./calculator.js")

test("add two positive numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("add two negative numbers", () => {
    expect(calculator.add(-2, -5)).toBe(-7);
});

test("add two zeros", () => {
    expect(calculator.add(0, 0)).toBe(0);
});

test("subract two positive numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
});

test("subtract two negative numbers", () => {
    expect(calculator.subtract(-2, -5)).toBe(3);
});

test("divide two positive numbers", () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
});

test("divide two negative numbers", () => {
    expect(calculator.divide(-5, -2)).toBe(2.5);
});


test("divide by 0", () => {
    expect(calculator.divide(2, 0)).toBe(undefined);
});

test("multiply by 0", () => {
    expect(calculator.multiply(2, 0)).toBe(0);
});

test("multiply two negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
});

test("multiply two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});



