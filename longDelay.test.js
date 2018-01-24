const delay = require('./longDelay.js');

describe('Variabble number of arguments', () => {
  test('Add 1,2,3,4,5', () => {
    expect(delay(1)(2)(3)(4)(5)()).toBe(15);
  });
  test('Add 1,2,-3', () => {
    expect(delay(1)(2)(-3)()).toBe(0);
  });
  test('Check whether a function is returned', () => {
    expect(typeof delay(1)(2)(-3)).toBe('function');
  });
  test('Pass nothing', () => {
    expect(delay()).toBe(0);
  });
  test('Pass null', () => {
    expect(delay(null)()).toBe(0);
  });
});
