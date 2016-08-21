var index = require("../index.js");

console.log(index, "what is in index");

describe("index spec", function() {
    it("should plus x and y for ous", function() {
      var sum = index.plus(1, 2);

      expect(sum).toEqual(3);
    });

    it("should return x - y", function() {
      var result = index.minus(2, 1);
      expect(result).toEqual(1);
    });
})
