let sum = 0;
function longDelay(arg) {
  // console.log(arg);
  if (arg !== undefined) {
    sum += arg;
    return longDelay;
  }
  const result = sum;
  sum = 0;
  return result;
}
module.exports = longDelay;
