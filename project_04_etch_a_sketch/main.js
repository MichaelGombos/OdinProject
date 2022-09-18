const grid = document.getElementById("grid");
const widthElement = document.getElementById("width");
const heightElement = document.getElementById("height");
const delayElement = document.getElementById("delay");
const reset = document.getElementById("reset");

let width = 16;
let height = 16;

const activate = (e) =>{
  e.target.classList.add("active");
}

const deActivate = (e) =>{
  setTimeout(()=>{
    e.target.classList.remove("active");
  },5000);
  
}


//create rows
for(let i =0; i < width; i++){
  let newRow = document.createElement("div");
  newRow.classList.add("grid-row");
  grid.appendChild(newRow);
    //create grid item
    for(let j = 0; j < height; j++){
      let newGridBox = document.createElement("div");
      newGridBox.classList.add("grid-box");
      newGridBox.addEventListener("mouseenter",activate);
      newGridBox.addEventListener("mouseleave",deActivate);

      newRow.appendChild(newGridBox);
    }
}

//reset button
const resetHandler = () => {
  for(item of Array.from(document.getElementsByClassName("grid-box"))){
    item.classList.remove("active");
  }
}

reset.addEventListener("click",resetHandler);
