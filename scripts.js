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
  alert("testing");
}


