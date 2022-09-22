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
