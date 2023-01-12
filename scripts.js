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

}


function changeColor(e) {
  console.log(e);
}
