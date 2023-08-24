//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choices = [rock, paper, scissors];
const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const sciIcon = document.querySelector('.scissors');
let  winCount = document.querySelector('.winCount');
let loseCount = document.querySelector('.loseCount');
let gameCount = document.querySelector('.gameCount');


rockIcon.addEventListener('click', function(){
        playerChoice = rock;
        console.log(rockIcon);
});

paperIcon.addEventListener('click', function(){
    playerChoice = paper;
    console.log(paperIcon);
});

sciIcon.addEventListener('click', function(){
    playerChoice = scissors;
    console.log(sciIcon);
});
















































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
    loseCount++, gameCount++ && alert('The PC Won this time')
)
console.log(computerChoice());
}




round();
round();









//computer randomly chooses one one the strings
function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}