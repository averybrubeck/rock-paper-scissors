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

function computerChoice(){
    return choices[Math.floor((Math.random() * 3))];
}
console.log(computerChoice());