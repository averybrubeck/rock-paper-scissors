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
let round = 0;



function playerChoose(){
    rockIcon.addEventListener('click', function chooseRock() {
            playerChoice = rock;
            processPlayerChoice();
            console.log(rockIcon);
    });
    paperIcon.addEventListener('click', function(){ 
        playerChoice = paper;
        console.log(paperIcon);
        processPlayerChoice();
    });
    sciIcon.addEventListener('click', function(){
        playerChoice = scissors;
        console.log(sciIcon);  
        processPlayerChoice();
    })
};
function compareChoices(){
        if (playerChoice === computerChoice) {
            gameCount++
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
};
function resetGame(){
resetButton.addEventListener('click', function(){
        winCount = 0;
        loseCount = 0;
        gameCount = 0;
        i = 0;
        updateBoard();
});
};
function processPlayerChoice(){
    compareChoices();
    updateBoard();
}
function playGame(rounds){
    for(let rounds = 1; rounds <= round; rounds++){
        playerChoice = null;
        let computerChoice = choices[Math.floor((Math.random() * 3))]; 
        function playerChoose(){
            rockIcon.addEventListener('click', function chooseRock() {
                    playerChoice = rock;
                    processPlayerChoice();
                    updateBoard();
                    console.log(rockIcon);
            });
            paperIcon.addEventListener('click', function(){ 
                playerChoice = paper;
                console.log(paperIcon);
                processPlayerChoice();
                updateBoard();
            });
            sciIcon.addEventListener('click', function(){
                playerChoice = scissors;
                console.log(sciIcon);  
                processPlayerChoice();
                updateBoard();
            })
        };
        resetGame();
    }
};

playGame();
