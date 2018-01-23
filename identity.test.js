const arg = require('./identity.js');

describe('Tests for simple datatypes.', () => {
  test('Sent number', () => {
    expect(arg(1)).toBe(1);
  });
  test('Sent infinity', () => {
    expect(arg(Infinity)).toBe(Infinity);
  });
  test('Sent string', () => {
    expect(arg('Infinity')).toBe('Infinity');
  });
  test('Sent undefined', () => {
    expect(arg(undefined)).toBe(undefined);
  });
});

describe('Tests for arrays and objects.', () => {
  test('Sent array', () => {
    expect(arg([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  const obj = { name: 'anmol', age: 18 };
  test('Sent object', () => {
    expect(arg(obj)).toBe(obj);
  });
});
