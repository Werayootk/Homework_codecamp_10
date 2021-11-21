Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(10000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
