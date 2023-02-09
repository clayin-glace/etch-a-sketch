const container = document.querySelector("#container");
console.log(container);

for(i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.id = i;

  //adds a square div to the container div
  document.querySelector("#container").appendChild(square);

  //adds a mouseover event listener to the square div
  document.getElementById(i).addEventListener("mouseover", changeColor);

  //changes square background color to blue when event is triggered
  function changeColor(e) {
    square.style.backgroundColor = "blue";
    console.log(e.target);
  }

}

function changeGridSize() {
  let gridSize = null;

  //limits user size input
  gridSize = prompt("Please enter a size integer in range 1-100: ");
    
  if (gridSize == null) { //allows user to exit prompt by clicking cancel
    alert("canceling");
    return 0;
  } else if (!Number.isInteger(Number(gridSize)) || gridSize.trim() == "") {
    //Number() converts whitespace to 0, hence the gridSize.trim() == "" conditional
    console.log(gridSize);
    alert("Incorrect input, please enter an integer.");
    changeGridSize();
  } else if (gridSize < 1 || gridSize > 100) {
    console.log(gridSize);
    alert("Incorrect range, please try again.");
    changeGridSize(); 
  }

  console.log("gridSize = " + gridSize);
}


