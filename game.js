

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
let looseCount = 0

function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}

function round() {
let sign = prompt("What's your choice?");

if (computerChoice() === rock && sign === paper) {
    console.log(computerChoice());
    alert('winner');
    winCount++;
  
} else if(computerChoice() === scissors && sign === rock) {
    console.log(computerChoice());
    alert('winner');
    winCount++;
} else if(computerChoice() === paper && sign === scissors) {
    console.log(computerChoice());
    alert('winner');
    winCount++;
} else(
    console.log(computerChoice(), 'you loose', looseCount++)  
)}

round();










 /* function game(text) {
    console.log('Welcome to the game');
    window.prompt('Enter your choice');
    console.log(computerChoice());
    window.prompt('choose again');
    console.log(computerChoice());
    window.prompt('choose again');
    console.log(computerChoice());
    window.prompt('choose again');
    console.log(computerChoice());
    window.prompt('choose again');
    console.log(computerChoice());
}

game();
*/