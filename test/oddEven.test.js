const oddEven = require('./oddEven.js')

test('testando...', () => {
    expect(oddEven(1)).toBe('ímpar');
    expect(oddEven(3)).toBe('ímpar');
});
