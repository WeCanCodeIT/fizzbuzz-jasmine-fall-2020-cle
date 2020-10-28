const getFizzBuzzValue = function(number){
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"
    }
    else if(number % 3 === 0){
        return "Fizz"
    }
    else if(number % 5 === 0){
        return "Buzz"
    }

    return number.toString();
}

let playingGame = true
let numberInput
let result
do{
    numberInput = prompt('Enter a number')
    result = getFizzBuzzValue(numberInput)
    alert(result)
    playingGame = confirm('Do you want to play again?')
}while(playingGame)

alert('Good bye!')