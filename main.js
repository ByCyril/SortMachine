var snakeX = 15;
var snakeY = 15;
var height = 30;
var width = 50;
var interval = 25;
var increment = 1;

//game variables
var length = 0;
var tailX = [snakeX];
var tailY = [snakeY];
var fX;
var fY;
var running = false;
var gameOver = false;
var direction = -1; // up = 0, down = -1, left = 1, right = 2
var int;
var score = 0;
var distance = 100000;

createMap();
createBlock(1, 15, "green");
createBlock(2, 10, "pink");
createBlock(3, 11, "yellow");
createBlock(4, 1, "blue");
createBlock(5, 4, "red");
createBlock(6, 9, "orange");
createBlock(7, 12, "white");

function createMap() {
  document.write("<center><table>");

  for (var y = 0; y < height; y++) {
    document.write("<tr>");

    for (var x = 0; x < width; x++) {
      if (x == 0 || x == width - 1 || y == 0 || y == height - 1) {
        document.write("<td class='wall' id='" + x + "-" + y + "'></td>");
      } else {
        document.write("<td class='blank' id='" + x + "-" + y + "'></td>");
      }
    }

    document.write("</tr>");
  }

  document.write("</table></center>");
}

function get(x, y) {
  return document.getElementById(x + "-" + y);
}

function set(x, y, value) {
  if (x != null && y != null) {
    get(x, y).setAttribute("class", value);
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getType(x, y) {
  return get(x, y).getAttribute("class");
}

function print(x) {
  console.log(x);
}

function createBlock(w, h, color) {
  console.log(h);
  h = 29 - h;
  for (var i = 29; i > h; i--) {
    console.log(15 - w, i, color);
    set(15 - w, i, color);
  }
}

function swap(x1, x2) {}
