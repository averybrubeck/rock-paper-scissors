

//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let choices = [rock, paper, scissors];
let winCount = 0;
let looseCount = 0;
let gameCount = 0;


//checks for 5 games played along with winners and looser
function gameCheck(){
    if (gameCount === 5 && winCount > looseCount) {
        alert('You"re a super winner');
    }else if (gameCount === 5 && looseCount > winCount) {
        alert('the PC has taken over');
    }
    else;
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














//computer randomly chooses one one the strings
function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}