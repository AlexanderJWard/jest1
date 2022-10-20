const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return string: error", () => {
            expect(addition("donkey", 31)).toBe("Error");
        });
        test("should return string: error", () => {
            expect(addition()).toBe("Error");
        });
        test("should return string: error", () => {
            expect(addition(21)).toBe("Error");
        });
        test("should return 0 for null + null", () => {
            expect(addition(null, null)).toBe(0);
        });
        test("should return 50 for -50 + 100", () => {
            expect(addition(-50, 100)).toBe(50);
        });
        test("should return 1.2 for 0.5 + 0.7", () => {
            expect(addition(0.5, 0.7)).toBe(1.2);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
})