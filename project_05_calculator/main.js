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

const operatorHandler = (command) => (e) =>{
  console.log(command);
}

const commandHandler = (command) => (e) =>{
  console.log(command);
}

const numberHandler = (command) => (e) =>{
  console.log(command);
}

let inputObject = {
  result : 0,
  nextNumber : 0,
  operator :0 ,
  steps: []
}

//initiating elements
const operators = ["percentage","divide","multiply", "subtract","add"]

const commands = ["clear","sign","equals","decimal"];

const numbers = [1,2,3,4,5,6,7,8,9,0];

const displayBox = document.getElementById("display");
const display = displayBox.childNodes[0];

const allButtons = Array.from(document.getElementsByClassName("button"));

const operatorButtons = allButtons.filter(button => operators.includes(button.dataset.command));

const commandButtons = allButtons.filter(button => commands.includes(button.dataset.command));

const numberButtons =  allButtons.filter(button => numbers.includes(parseInt(button.dataset.command)));


operatorButtons.forEach(button => button.addEventListener("click",numberHandler(button.dataset.command)));

commandButtons.forEach(button => button.addEventListener("click",numberHandler(button.dataset.command)));

numberButtons.forEach(button => button.addEventListener("click",numberHandler(button.dataset.command)));



