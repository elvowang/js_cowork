console.log("Hello World");

var index = {};

index.plus = function(x, y) {
  var sum = x + y;
  return sum;
}

 index.minus = function(x, y) {
  return x - y;
}

// function greeting(x) {
//   if(x=="Elvo") {
//     var result = "Hello " + x;
//     return result;
//   } else {
//     var result = "Hello Small " + x;
//     return result;
//   }
//
// }
index.greeting = function(x) {
  var result;
  result = x=="Elvo"? "Hello " + x : "Hello Small " + x;
  return result;
}

index.replacing = function(x, y) {
  y = typeof y == "undefined" ? "world" : y;
  var result;
  result = x.replace("nano", y);
  return result;
}

index.aHasB = function(x, y) {
  var result = x.includes(y);
  return result;
}

module.exports = index;
