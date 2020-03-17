describe('Fizzbuzz', function() {

  var fizzbuzz;

    beforeEach(function() {
      fizzbuzz = new Fizzbuzz();
    });

  describe('knows when a number is', function() {
    it('divisible by 3', function() { 
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
  
  describe('knows when a number is', function() {
    it('divisible by 15', function() { 
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  
  describe('knows when a number is NOT', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(5)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Fizzbuzz" when a number is divisible by 15', function(){
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });
    it('"Fizz" when a number is divisible by 3', function(){
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });
    it('"Buzz" when a number is divisible by 5', function(){
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });
  });
});





// isDivisibleByThree is a method.
// fizzbuzz = new Fizzbuzz(); This creates a new instance of the
// function (class) Fizzbuzz. This now shows this method belongs
// to this class. 



