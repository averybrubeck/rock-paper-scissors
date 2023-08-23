

//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let choices = [rock, paper, scissors];
let winCount = 0;
let looseCount = 0;
let gameCount = 0;

//computer randomly chooses one one the strings
function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}
//checks for 5 games played along with winners and looser
function gameCheck(){
    if (gameCount === 5 && winCount > looseCount) {
        alert('You"re a super winner');
    }else if (gameCount === 5 && looseCount > winCount) {
        alert('the PC has taken over');
    }
    else;
}
//message to start the game
function gameStart() {
    alert('You are about to play RPS vs a PC, click ok to start or exit the browser to quit. Best of 5');
}
//riund played, ends when user or pc wins a round
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
//game loop
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





