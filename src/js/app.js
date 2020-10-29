class FizzBuzz{
    // constructor
    constructor(){

    }

    // functions in a class are Methods
    getFizzBuzzValue(number){
        if(this.isDivisibleBy3(number) && this.isDivisibleBy5(number)){
            return "FizzBuzz"
        }
        else if(this.isDivisibleBy3(number)){
            return "Fizz"
        }
        else if(this.isDivisibleBy5(number)){
            return "Buzz"
        }
    
        return number.toString();
    }

    isDivisibleBy3(number){
        return number % 3 === 0
    }

    isDivisibleBy5(number){
        return number % 5 === 0
    }

}

let fizzBuzz = new FizzBuzz()

let playingGame = true
let numberInput
let result
do{
    numberInput = prompt('Enter a number')
    result = fizzBuzz.getFizzBuzzValue(numberInput)
    alert(result)
    playingGame = confirm('Do you want to play again?')
}while(playingGame)

alert('Good bye!')

// const getFizzBuzzValue = function(number){
//     if(isDivisibleBy3(number) && isDivisibleBy5(number)){
//         return "FizzBuzz"
//     }
//     else if(isDivisibleBy3(number)){
//         return "Fizz"
//     }
//     else if(isDivisibleBy5(number)){
//         return "Buzz"
//     }

//     return number.toString();
// }

// function isDivisibleBy3(number){
//     return number % 3 === 0
// }

// function isDivisibleBy5(number){
//     return number % 5 === 0
// }

