import capitalize from './capitalize';

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
});

test('"Test" should become "Test"', () => {
    expect(capitalize('Test')).toBe('Test');
});

test('"TEST" should become "TEST"', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

test('"three word test" should become "Three word test"', () => {
    expect(capitalize('three word test')).toBe('Three word test');
});