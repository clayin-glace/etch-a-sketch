const container = document.querySelector('#container');
console.log(container);

for(i = 0; i < 256; i++) {
  var square = document.createElement('div');
  square.className = "square";

  document.querySelector('#container').appendChild(square);
}
