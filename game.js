//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choices = [rock, paper, scissors];

let playerChoice = null;
let computerChoice = choices[Math.floor((Math.random() * 3))];

const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const sciIcon = document.querySelector('.scissors');
const resetButton = document.querySelector('.resetButton');

let gameCountIcon = document.querySelector('.gameCount');
let  winCountIcon = document.querySelector('.winCount');
let loseCountIcon = document.querySelector('.loseCount');

let winCount = 0;
let loseCount = 0;
let gameCount = 0;


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
        console.log('your mothers a whore')
    };

function updateBoard(){
    winCountIcon.textContent =  winCount;
    loseCountIcon.textContent = loseCount;
    gameCountIcon.textContent = gameCount;
}
function resetGame(){
resetButton.addEventListener('click', function(){
        winCount = 0;
        loseCount = 0;
        gameCount = 0;
        updateBoard();
});
}
function playerInput(){
    choices.addEventListener('click', playerChoose(), compareChoices(), updateBoard(), resetGame());
}
playerInput();

















