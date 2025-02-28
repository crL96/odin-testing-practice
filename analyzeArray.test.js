const analyzeArray = require("./analyzeArray.js")

test("average, all positive values", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test("average, mix of pos and neg values", () => {
    expect(analyzeArray([1,-8,3,-4,2,6]).average).toBe(0);
});

test("average, empty array", () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test("min, all positive values", () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test("min, mix of positive and negative values", () => {
    expect(analyzeArray([1,-8,3,4,-2,6]).min).toBe(-8);
});

test("min, empty array", () => {
    expect(analyzeArray([]).min).toBe(null);
});

test("max, all positive values", () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test("max, mix of positive and negative values", () => {
    expect(analyzeArray([1,-8,3,4,-2,6]).max).toBe(6);
});

test("max, empty array", () => {
    expect(analyzeArray([]).max).toBe(null);
});

test("length, empty array", () => {
    expect(analyzeArray([]).length).toBe(0);
});

test("length, mix of positive and negative values", () => {
    expect(analyzeArray([1,-8,3,4,-2,6]).length).toBe(6);
});

