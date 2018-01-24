let n = 0;
function curryFunc(funcToCurry) {
  n = funcToCurry.length;
  return function accumulate(...arg) {
    if (arg.length >= n) {
      return funcToCurry(...arg);
    }
    return (...arg1) => accumulate(...arg.concat(arg1));
  };
}

module.exports = curryFunc;
