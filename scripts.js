const container = document.querySelector("#container");
console.log(container);

for(i = 0; i < 256; i++) {
  var square = document.createElement("div");
  square.className = "square";
  square.id = i;

  document.querySelector("#container").appendChild(square);
}

var hover = document.getElementsByClassName("square").addEventListener("mouseover", changeColor);

function changeColor(e) {
  console.log(e.target);
}
