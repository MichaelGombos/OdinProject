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
      if(num2 == 0){
        result = "Snarky error message";
        break;
      }      
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
  nextDecimal:false,
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
    updateDisplay();
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
      clearDisplay();
      break;
    case("sign"):
      inputObject.nextNumber = 0 - inputObject.nextNumber;
      updateDisplay();
      break;
    case("equals"):
      inputObject.nextNumber = (operate(inputObject.operator,inputObject.lastNumber,inputObject.nextNumber));
      updateDisplay();
      break;
    case("decimal"):
      inputObject.nextDecimal = true;
      updateDisplay();
      break;
    
  }
}

const numberHandler = (command) => (e) =>{
  let nextNumberString;
  if(inputObject.nextDecimal){
    nextNumberString = inputObject.nextNumber.toString() + "." + command;
    console.log("this far?",nextNumberString);
    inputObject.nextDecimal = false;

  }
  else{
    nextNumberString = inputObject.nextNumber.toString() + command;
  }
  //TODO set operator to none
  inputObject.nextNumber = parseFloat(nextNumberString);
  //set display to nextNumberString
  updateDisplay();
}

const updateDisplay = () =>{
  if(typeof inputObject.nextNumber == "string"){
    //for error
    display.innerHTML = inputObject.nextNumber;
  }
  else{
    //trim display decimals
    let fixed = inputObject.nextNumber.toFixed(6);
  
    display.innerHTML = parseFloat(fixed);
  }

  if(inputObject.nextDecimal){
    //add decimal
    display.innerHTML += ".";
  }
}

const clearDisplay = () =>{
  //clears display and wipes input object.
  display.innerHTML = 0;
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

//keyboard support
/*
c,a clear
s sign
p percent
/ divide
x multiply
- subtrace
+ plus
= equals
. decimal
*/
document.addEventListener("keydown",(e) =>{
  let name = e.key;
  let code = e.code;
  let digits = []
  console.log("key",name,"code",code);
  console.log(isNumeric(name));

  switch(isNumeric(name)){
    case true:
      numberHandler(parseInt(name))(e);
      break;
    case false:
      break;
  }
  switch(name){
    case "c":
      clearDisplay();
      break;
    case "a":
      clearDisplay();
      break;
    case "/":
      operatorHandler("divide")(e);
      break;
    case "x":
      operatorHandler("multiply")(e);
      break;
    case "-":
      operatorHandler("subtract")(e);
      break;
    case "+":
      operatorHandler("add")(e);
      break;
    case "=":
      commandHandler("equals")(e);
      break;
    case "Enter":
      commandHandler("equals")(e);
      break;
    case ".":
      commandHandler("decimal")(e);
      break;
    case "s":
      commandHandler("sign")(e);
      break;
    case "p":
      commandHandler("percent")(e);
      break;
  }
});

function isNumeric(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseFloat(str)) 
}