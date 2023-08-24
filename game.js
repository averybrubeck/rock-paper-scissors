//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choices = [rock, paper, scissors];
let playerChoice = null;
const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const sciIcon = document.querySelector('.scissors');
let  winCount = document.querySelector('.winCount');
let loseCount = document.querySelector('.loseCount');
let gameCount = document.querySelector('.gameCount');
let computerChoice = choices[Math.floor((Math.random() * 3))];

playerChoose();
compareChoices();


function playerChoose() {
rockIcon.addEventListener('click', function(){
        playerChoice = rock;
        console.log(rockIcon);    
});
paperIcon.addEventListener('click', function(){ 
    playerChoice = paper;
    console.log(paperIcon);
    paperIcon.style.transform = "scale(1.2)";
    paperIcon.style.transition = "transform 0.25 ease";
});
sciIcon.addEventListener('click', function(){
    playerChoice = scissors;
    console.log(sciIcon);  
})
};


function compareChoices() {
    if (playerChoice === computerChoice) {
        alert('Its a tie!');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        winCount++;
    } else {
        loseCount++;
    }
    gameCount++;
};










































