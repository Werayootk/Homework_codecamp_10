Function.prototype.defer = function (ms) {
  let fn = this;
  return function (a, b) {
    setTimeout(() => {
      return fn(a, b);
    }, ms);
  };
};

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที
