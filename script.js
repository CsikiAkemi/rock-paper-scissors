
const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");


const possibleChoices = document.querySelectorAll("button");

let userChoice = '';
let computerChoice = '';
let result = '';

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)=>{

    userChoice = e.target.id;
    userChoiceDisplay.innerHTML =userChoice;
    generateComputerChoice()
    getResult()
    
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3  ) + 1; // Or  * possibleChoices.length
    console.log(randomNumber);

    if(randomNumber === 1){
        computerChoice = 'rock';
    }else if(randomNumber === 2){
        computerChoice = 'scissors'
    }else if(randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw'
    }else if( computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you lose'
    }else if( computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose'
    }else if( computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win'
    }else if( computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose'
    }else if( computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win'
    }else if( computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you win'
    }

    resultDisplay.innerHTML = result;
}