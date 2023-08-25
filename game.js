//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choices = [rock, paper, scissors];

const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const sciIcon = document.querySelector('.scissors');
const resetButton = document.querySelector('.resetButton');

let computerChoice = choices[Math.floor(Math.random() * choices.length)];
let playerChoice = null;

let gameCountIcon = document.querySelector('.gameCount');
let winCountIcon = document.querySelector('.winCount');
let loseCountIcon = document.querySelector('.loseCount');

let winCount = 0;
let loseCount = 0;
let gameCount = 0;

 function playerChoose(){
    rockIcon.addEventListener('click', function() {
            playerChoice = rock;
            console.log(rockIcon);
            compareChoices(playerChoice);
            updateBoard();
            resetGame();
    });
    paperIcon.addEventListener('click', function(){ 
        playerChoice = paper;
        console.log(paperIcon);
        compareChoices(playerChoice);
        updateBoard();
        resetGame();
    });
    sciIcon.addEventListener('click', function(){
        playerChoice = scissors;
        console.log(sciIcon);
        compareChoices(playerChoice)
        updateBoard()
        resetGame();   
    })

    return playerChoice;
};
function compareChoices(){
        if (playerChoice === computerChoice) {
            gameCount++
        } else if (
            (playerChoice === 'rock' && computerChoice === scissors) ||
            (playerChoice === paper && computerChoice === rock) ||
            (playerChoice === scissors && computerChoice === paper)
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
};
function resetGame(){
resetButton.addEventListener('click', function(){
        winCount = 0;
        loseCount = 0;
        gameCount = 0;
        updateBoard();
});
};
function getRandomChoice() {
    return 
}

playerChoose();

