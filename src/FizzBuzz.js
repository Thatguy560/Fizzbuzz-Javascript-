var Fizzbuzz = function(){};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3)
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5)
};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};
// Private method line 15-17, we need this for the tests to work.

Fizzbuzz.prototype.says = function(number) { 
  if (this.isDivisibleByFifteen(number)) {
    return "Fizzbuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Fizz";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
  return number;
};


// class_name.prototype.method_name = function(first_argument) {}; 
// Prototype allows this function (class) to inherit this method?

