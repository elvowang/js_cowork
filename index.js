console.log("Hello World");

function plus(x, y) {
  var sum = x + y;
  return sum;
}

function minus(x, y) {
  return x - y;
}

module.exports = {
  plus: plus,
  minus: minus
}
