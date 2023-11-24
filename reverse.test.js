import reverseStr from './reverse';

test("Reverse String", () => {
    expect(reverseStr('hi')).toBe('ih');
});
test("Reverse String", () => {
    expect(reverseStr('hello my name is Scott')).toBe('ttocS si eman ym olleh');
});
test("Reverse String", () => {
    expect(reverseStr('hi 117')).toBe('711 ih');
});