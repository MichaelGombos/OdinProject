console.log("well hello?");

// dom elements

const rockInput = document.getElementById("rock");
const paperInput = document.getElementById("paper");
const scissorsInput = document.getElementById("scissors");

const restartInput = document.getElementById("restart");

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const subheading = document.getElementsByClassName("subheading")[0];




const options = ["rock","paper","scissors"];

let playing = true;

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

const getComputerChoice = () => {
  return options[Math.floor(Math.random() * 3)];
}

const getPlayerChoice = () => {
  const answer = prompt("choose a type");
  return answer;
}

// comparison - of player and copmuter choices
const calcRound = (pChoice,cChoice) =>{

  switch(pChoice){
    case "rock":
      switch(cChoice){
        case "rock":
          return 0;
        case "paper":
          return -1;
        case "scissors":
          return 1;
      }
    case "paper":
      switch(cChoice){
        case "rock":
          return 1;
        case "paper":
          return 0;
        case "scissors":
          return -1;
      }
    case "scissors":
      switch(cChoice){
        case "rock":
          return -1;
        case "paper":
          return 1;
        case "scissors":
          return 0;
      }
    default:
      //invalid choice
      console.log(pChoice);
      return -2;
  }
}
//awards points and prints to console
const awardPoints = (roundValue) => {
  switch(roundValue){
    case -2:
      console.log("ERROR: invalid choice from player");
      break;
    case -1:
      computerScore++;
      console.log("the computer won this round")
      break;
    case 0:
      // tie
      console.log("nobody won this round")
      break;
    case 1:
      playerScore++;
      console.log("the player won this round")
      break;
  }
  //make dom match
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
}
const declareWinner = (playerScore, computerScore) =>{
  let winner;
  if(playerScore > computerScore){
    winner = "player";
  }
  else if(playerScore < computerScore){
    winner = "computer";
  }
  subheading.innerHTML = `The ${winner} won this round`;
  //hide buttons, show restart
  document.getElementById("game-buttons").classList.add("display-none");
  document.getElementById("restart").classList.remove("display-none");

}

const restartGame = () =>{
  //
  subheading.innerHTML = "First to 5 points wins";
  //hide restart, show buttons
  document.getElementById("game-buttons").classList.remove("display-none");
  document.getElementById("restart").classList.add("display-none");

  //reset score
  playerScore =0;
  computerScore =0;
  playerScoreDisplay.innerText = playerScore;
  computerScoreDisplay.innerText = computerScore;
}


const gameLoop = (playerChoice) => () => {
  computerChoice = getComputerChoice();
  awardPoints(calcRound(playerChoice,computerChoice));
  console.log(playerChoice,computerChoice);
  console.log(playerScore,computerScore);

  if(playerScore >= 2 || computerScore >=2 ){
    console.log("declare and reset!");
    declareWinner(playerScore,computerScore);
 
  }
}
// declareWinner(playerScore,computerScore);


 
// event listeners
rockInput.addEventListener("click",gameLoop("rock"));
paperInput.addEventListener("click",gameLoop("paper"));
scissorsInput.addEventListener("click",gameLoop("scissors"));

restartInput.addEventListener("click",restartGame);

