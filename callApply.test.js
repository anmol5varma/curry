const callApply = require('./callApply.js');

function update(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
  return this;
}

describe('Tests for caller', () => {
  {
    const person1 = { name: 'Anmol', age: 18, tShirtSize: 'L' };
    const updatePerson1 = { name: 'anmol', age: 20, tShirtSize: 'XL' };

    test('Pass object and new values to update the object', () => {
      expect(callApply.caller(person1, update, 'anmol', 20, 'XL')).toEqual(updatePerson1);
    });
  }
  {
    const person1 = { name: 'Parth', age: 22, tShirtSize: 'M' };
    const updatePerson1 = { name: 'Abhishek', age: 28, tShirtSize: 'XL' };

    test('Pass object and new values to update the object', () => {
      expect(callApply.caller(person1, update, 'Abhishek', 28, 'XL')).toEqual(updatePerson1);
    });
  }
});
