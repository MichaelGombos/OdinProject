console.log("well hello?");

const options = ["rock","paper","scissors"];

let playing = true;
let restart;

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
}
const declareWinner = (playerScore, computerScore) =>{
  if(playerScore > computerScore){
    console.log("The player won this game!")
  }
  else if(playerScore < computerScore){
    console.log("The computer won this game!")
  }
}

const gameLoop = () =>{
  while(playerScore < 5 && computerScore < 5){
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    awardPoints(calcRound(playerChoice,computerChoice));
    console.log(playerChoice,computerChoice);
    console.log(playerScore,computerScore);
  }
}

gameLoop();


declareWinner(playerScore,computerScore);


