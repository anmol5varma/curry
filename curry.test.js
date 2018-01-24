const wrapper = require('./curry.js');

function testFunc(a, b, c, d) { return a.concat(b).concat(c).concat(d); }

const curriedAbc = wrapper(testFunc);
describe('Checking for concatination', () => {
  const input1 = 'a'; const input2 = 'b'; const input3 = 'c'; const input4 = 'd';
  const output = 'abcd';
  test('passing arguments in pair of 2', () => {
    expect(curriedAbc(input1, input2)(input3, input4)).toEqual(output);
  });
  test('passing arguments in individually', () => {
    expect(curriedAbc(input1)(input2)(input3)(input4)).toEqual(output);
  });
});

describe('Tracking the called function', () => {
  const mockFunction = jest.fn(testFunc);
  const input1 = 'a'; const input2 = 'b'; const input3 = 'c'; const input4 = 'd';
  // const output = 'abcd';
  test('passing arguments in pair of 2', () => {
    curriedAbc(input1, input2)(input3, input4);
    expect(mockFunction).toHaveBeenCalledWith('a', 'b', 'c', 'd');
  });
});
