const { assert } = require("chai");

describe("TESTING NODEJS ARRAY", () => {
  describe(".indexOf()", () => {
    it("Should test index of array", (done) => {
      var arr = [1, 2, 3, 4, 5];
      var index = arr.indexOf(2);
      assert(index, 1);
      done();
    });

    it("Should fail testing index of array", (done) => {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      var index = arr.indexOf(11);
      assert(index, -1);
      done();
    });
  });

  describe("arr[ index ]", () => {
    it("arr[ index ] should be undefined", (done) => {
      var arr = [1, 2, 3, 4, 5];
      var val = arr[5];
      assert(val === undefined);
      done();
    });
    it("arr[ index ] should be not undefined", (done) => {
      var arr = [1, 2, 3, 4, 5];
      var index = arr[4];
      assert(index, 5);
      done();
    });
  });

  describe("arr.length", () => {
    it("Should return length == 0 for empty array", (done) => {
      var arr = [];
      var length = arr.length;
      assert(length === 0);
      done();
    });
    it("Should return length == 2 for array of 2 elements", (done) => {
      var arr = [1, 2];
      var length = arr.length;
      assert(length, 2);
      done();
    });
  });
});

describe("Array Methods", () => {
  it("arr.filter() method", (done) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var filtered = arr.filter(function (item) {
      return item > 5;
    });
    const expected = [6, 7, 8, 9, 10];
    assert.deepEqual(filtered, expected);
    done();
  });

  it("arr.map() method", (done) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var mapped = arr.map(function (item) {
      return item * 2;
    });
    const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    assert.deepEqual(mapped, expected);
    done();
  });

  it("arr.reduce() method", (done) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var reduced = arr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    assert.equal(reduced, 55);
    done();
  });

  it("arr.forEach() method", (done) => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var newArr = [];
    arr.forEach(function (value, index) {
      newArr.push(value * index);
    });
    assert.deepEqual(newArr, [0, 2, 6, 12, 20, 30, 42, 56, 72, 90]);
    done();
  });
});
