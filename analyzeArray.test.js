import analyzeArray from "./analyzeArray";

test("Test Array One", () => {
    expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toMatchObject({
        average: 5.5,
        min: 1,
        max: 10,
        length: 10,
    });
});


test("Test Array Two", () => {
    expect(analyzeArray([2, 4, 8, 10, 20])).toMatchObject({
        average: 8.8,
        min: 2,
        max: 20,
        length: 5,
    });
});