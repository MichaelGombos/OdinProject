const operate = (operator,num1,num2) =>{
  let result;
  switch(operator){
    case "add":
      result = num1+num2;
      break;
    case "subtract":
      result = num1-num2;
      break;
    case "multiply":
      result = num1*num2;
      break;
    case "divide":
      //check for div by 0 error
      result = num1/num2;
      break;
    case "percentage":
      result = (num1/100) * num2;
      break;    
    default:
      result = "INVALID OPERATOR";
      break;
  }
  return result;
}

let inputObject = {
  lastNumber : 0,
  nextNumber : 0,
  operator :"" ,
  steps: []
}

const operators = ["percentage","divide","multiply", "subtract","add"]

const commands = ["clear","sign","equals","decimal"];

const numbers = [1,2,3,4,5,6,7,8,9,0];

//handlers

const operatorHandler = (command) => (e) =>{


  //if there is a last number, solve the equation
  if(inputObject.lastNumber && inputObject.nextNumber){
    console.log(inputObject.lastNumber,command,inputObject.nextNumber);

    inputObject.nextNumber = (operate(command,inputObject.lastNumber,inputObject.nextNumber));
    display.innerHTML = inputObject.nextNumber;
  }
  else{
    inputObject.lastNumber = inputObject.nextNumber;
    inputObject.nextNumber = 0;
    // display.innerHTML = 0;
  
  }
  console.log(command);
  //once operator is clicked, remove displaytext. set nextNumber as lastNumber
  inputObject.operator = command;
}

const commandHandler = (command) => (e) =>{
  console.log(command);

  switch(command){
    //["clear","sign","equals","decimal"];
    case("clear"):
      inputObject.lastNumber = 0;
      inputObject.nextNumber = 0;
      display.innerHTML = 0;
      break;
    case("sign"):
      inputObject.nextNumber = 0 - inputObject.nextNumber;
      display.innerHTML = inputObject.nextNumber.toString();
      break;
    case("equals"):
      inputObject.nextNumber = (operate(inputObject.operator,inputObject.lastNumber,inputObject.nextNumber));
      display.innerHTML = inputObject.nextNumber;
      break;

  }
}

const numberHandler = (command) => (e) =>{
  //TODO set operator to none
  let nextNumberString = inputObject.nextNumber.toString() + command;
  inputObject.nextNumber = parseInt(nextNumberString);
  //set display to nextNumberString
  display.innerHTML = nextNumberString;
}


//initiating elements

const displayBox = document.getElementById("display");
const display = displayBox.childNodes[0];

const allButtons = Array.from(document.getElementsByClassName("button"));

const operatorButtons = allButtons.filter(button => operators.includes(button.dataset.command));

const commandButtons = allButtons.filter(button => commands.includes(button.dataset.command));

const numberButtons =  allButtons.filter(button => numbers.includes(parseInt(button.dataset.command)));

//event listeners

operatorButtons.forEach(button => button.addEventListener("click",operatorHandler(button.dataset.command)));

commandButtons.forEach(button => button.addEventListener("click",commandHandler(button.dataset.command)));

numberButtons.forEach(button => button.addEventListener("click",numberHandler(button.dataset.command)));



