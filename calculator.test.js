import calculator from "./calculator";

test("Add", () => {
    expect(calculator.add(4, 10)).toBe(14);
});
test("Subtract", () => {
    expect(calculator.subtract(4, 10)).toBe(-6);
});
test("Divide", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});
test("Multiply", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
});