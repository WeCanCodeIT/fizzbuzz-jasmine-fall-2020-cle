describe('FizzBuzz changes numbers to strings:', function(){

    // Tests go here
    describe('for plain numbers', function(){

        // What behavior should we expect?
        it('should return 1 for 1', function(){
            expect(getFizzBuzzValue(1)).toBe("1");
        })

        it('should return 2 for 2', function(){
            expect(getFizzBuzzValue(2)).toBe("2");
        })

    })

    describe('for numbers divisible by 3', function(){

        it('should return Fizz for 3', function(){
            expect(getFizzBuzzValue(3)).toBe("Fizz");
        })

        it('should return Fizz for 6', function(){
            expect(getFizzBuzzValue(6)).toBe("Fizz");
        })

    })

    describe('for numbers divisible by 5', function(){

        it('should return Buzz for 5', function(){
            expect(getFizzBuzzValue(5)).toBe("Buzz")
        })

        it('should return Buzz for 10', function(){
            expect(getFizzBuzzValue(10)).toBe("Buzz")
        })

    })

    describe('for numbers divisible by 3 and 5', function(){

        it('should return FizzBuzz for 15', function(){
            expect(getFizzBuzzValue(15)).toBe("FizzBuzz")
        })

        it('should return FizzBuzz for 30', function(){
            expect(getFizzBuzzValue(30)).toBe("FizzBuzz")
        })
    })

})