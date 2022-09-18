const grid = document.getElementById("grid");
const widthElement = document.getElementById("width");
const heightElement = document.getElementById("height");
const delayElement = document.getElementById("delay");
const reset = document.getElementById("reset");
const set = document.getElementById("set");

widthElement.defaultValue = 16;
heightElement.defaultValue = 16;
delayElement.defaultValue = 5000;

let width = widthElement.value;
let height = heightElement.value;
let delay = delayElement.defaultValue;

const activate = (e) =>{
  e.target.classList.add("active");
}

const deActivate = (e) =>{
  setTimeout(()=>{
    e.target.classList.remove("active");
  },5000);
  
}


//create rows
const generateGrid = () =>{
  for(let i =0; i < height; i++){
    let newRow = document.createElement("div");
    newRow.classList.add("grid-row");
    grid.appendChild(newRow);
      //create grid item
      for(let j = 0; j < width; j++){
        let newGridBox = document.createElement("div");
        newGridBox.classList.add("grid-box");
        newGridBox.addEventListener("mouseenter",activate);
        newGridBox.addEventListener("mouseleave",deActivate);
  
        newRow.appendChild(newGridBox);
      }
  }
}
const deleteGrid = () =>{
 
  for(item of Array.from(document.getElementsByClassName("grid-row"))){
    item.remove();
  }
}
generateGrid();

//reset button
const resetHandler = () => {
  for(item of Array.from(document.getElementsByClassName("grid-box"))){
    item.classList.remove("active");
  }
}

const setHandler = (e) => {

  e.preventDefault();
  //takes width height and delay
  width = widthElement.value;
  height = heightElement.value;
  delay = delayElement.value;
  //redraw board 
  resetHandler();
  deleteGrid();
  generateGrid();
}
reset.addEventListener("click",resetHandler);

set.addEventListener("click",setHandler);