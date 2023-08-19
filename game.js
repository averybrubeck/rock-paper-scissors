

//initiate the game/start button or message
//need an array for the rock paper siccors 
//need to be able to compare the three
// need the computer to randomly choose between
//need player input 
//game loop/copy code 5 times 
//need to keep score1
//need ending messages winning and losing


const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let choices = [rock, paper, scissors];
let winCount = 0;
let looseCount = 0;
let gameCount = 0;

function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}

function gameCheck(){
    if (gameCount === 5 && winCount > looseCount) {
        alert('You"re a super winner');
    }else if (gameCount === 5 && looseCount > winCount) {
        alert('the PC has taken over');
    }
    else;
}

function gameStart() {
    alert('You are about to play RPS vs a PC, click ok to start or exit the browser to quit. Best of 5');
}

function round() {
let playerChoice = prompt("What's your choice?");

if (computerChoice() === rock && playerChoice === paper) {
   
    alert('winner');
    winCount++;
    gameCount++;
  
} else if(computerChoice() === scissors && playerChoice === rock) {
   
    alert('winner');
    winCount++;
    gameCount++;
} else if(computerChoice() === paper && playerChoice === scissors) {
   
    alert('winner');
    winCount++;
    gameCount++;
} else(
    looseCount++, gameCount++ && alert('The PC Won this time')
)

console.log(computerChoice());
}

function game(){
gameStart();
round();
round();
round();
round();
round();
gameCheck();
}

game();





