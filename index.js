const guessingGame = () => {
    let randomNumber = Math.floor(Math.random() * 101)
    let numberOfGuess = 3

    let guess = parseInt(prompt('Please guess a number between 0 and 100'))

    while (numberOfGuess > 0){
        if (guess === randomNumber) {
            alert(Messages(congratulatoryMessage))
          return;
        } else if (guess > randomNumber) {
            alert(`Guessed Number higher than Hidden-Number`)
        } else {
            alert(`Guessed Number is less than Hidden-Number`)
        }
        
        numberOfGuess--;

        if(numberOfGuess > 0) {
        alert(`You have ${numberOfGuess} left`)
          guess = parseInt(prompt('Please take another guess between 0 and 100'))
        }
    }
    alert(`The hiddden Number is ${randomNumber}`)
    alert(Messages(sarcasticMessages))
}

const Messages = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const sarcasticMessages = [ 
    'argh who you !!',
    'Nearly cannot Kill a bird',
    'It seems you need Abido Shaker to guess right',
    'you can give up, You sef don try',
    'shift.. keep trying'
]

const congratulatoryMessage = [
    'You sabi the eye',
    'Wow! spot on!',
    'you guess Right!!!, which power did you use',
    'Brilliant guess',
    'I swear, Congratulations Buddy!'
]

guessingGame()