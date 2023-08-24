//testing the rps-ui branch 
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const choices = [rock, paper, scissors];
let playerChoice = choices;
const rockIcon = document.querySelector('.rock');
const paperIcon = document.querySelector('.paper');
const sciIcon = document.querySelector('.scissors');
let  winCount = document.querySelector('.winCount');
let loseCount = document.querySelector('.loseCount');
let gameCount = document.querySelector('.gameCount');
let computerChoice = choices[Math.floor((Math.random() * 3))];

playerChoose();


function playerChoose () {
rockIcon.addEventListener('click', function(){
        playerChoice = rock;
        console.log(rockIcon);    
});



paperIcon.addEventListener('click', function(){ {
}
    playerChoice = paper;
    console.log(paperIcon);
    paperIcon.style.transform = "scale(1.2)";
    paperIcon.style.transition = "transform 0.25 ease";
});

sciIcon.addEventListener('click', function(){
    playerChoice = scissors;
    console.log(sciIcon);
    sciIcon.style.transform = "scale(1.2)";
    sciIcon.style.transition = "transform 0.25 ease";
});

}









































/*checks for 5 games played along with winners and looser
function gameCheck(){
    if (gameCount === 5 && winCount > looseCount) {
        alert('You"re a super winner');
    }else if (gameCount === 5 && looseCount > winCount) {
        alert('the PC has taken over');
    }
    else;
}

*/
//riund played, ends when user or pc wins a round
/*function round() {
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



*/





