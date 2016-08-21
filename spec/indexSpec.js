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

    it("", function() {
      var greetElvo = index.greeting("Elvo");
      var greetNano = index.greeting("Nano");

      expect(greetElvo).toEqual("Hello Elvo");
      expect(greetNano).toEqual("Hello Small Nano");
    });

    it("", function() {
        var result = index.replacing("hello nano", "elvo");
        expect(result).toEqual("hello elvo");

        result = index.replacing("hello nano", "elvo1");
        expect(result).toEqual("hello elvo1");

        result = index.replacing("hello nano");
        expect(result).toEqual("hello world");

    });

    it("", function() {
        var result = index.aHasB("hello world", "hello");

        expect(result).toEqual(true);
    });

})
