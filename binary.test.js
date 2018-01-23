const arg = require('./binary.js');

describe('Tests for numbers datatypes.', () => {
  test('Add 1,2', () => {
    expect(arg(1, 2)).toBe(3);
  });
  test('Add 1,null', () => {
    expect(arg(1, null)).toBe(1);
  });
  test('Add 1,-1', () => {
    expect(arg(1, -1)).toBe(0);
  });
});

describe('Tests for strings.', () => {
  test('Sent abc and def', () => {
    expect(arg('abc', 'def')).toEqual('abcdef');
  });
  test('Sent [1,2,3,4] and [5,6] and output is string', () => {
    expect(typeof arg([1, 2, 3, 4], [5, 6, 7, 8])).toBe('string');
  });
});
