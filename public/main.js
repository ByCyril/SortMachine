const canvasHeight = 500;
const canvasWidth = 1000;
const blockWidth = 5;

var boxHeights = [];
var i = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createBoxes();
  frameRate(25);
}

function draw() {
  background(0);
  bubbleSort();
}

function bubbleSort() {
  if (i < boxHeights.length) {
    for (var j = i + 1; j < boxHeights.length; j++) {
      if (boxHeights[j] < boxHeights[i]) {
        swapRect(boxHeights, i, j);
      }
    }
  } else {
    noLoop();
  }

  i++;

  retainBoxes();
}

function retainBoxes() {
  for (let i = 1; i < boxHeights.length; i++) {
    fill(255);
    rect(
      i * blockWidth,
      canvasHeight - (boxHeights[i] + 5),
      blockWidth,
      boxHeights[i]
    );
  }
}

var p = 13;
var i = -1;
var j = 0;

function quickSort() {
  console.log(j, p);
  while (j < p) {
    if (boxHeights[j] < boxHeights[p]) {
      i++;
      swapRect(boxHeights, i, j);
    }
    j++;

    if (j == p) {
      console.log("here");
      swapRect(boxHeights, i + 1, p);
      break;
    }
  }
  noLoop();
  retainBoxes();
}

function createBoxes() {
  for (var i = 0; i < 1000; i = i + blockWidth) {
    var h = Math.floor(Math.random() * 500 + 1);
    boxHeights.push(h);
    rect(i, canvasHeight - (h + 5), blockWidth, h);
  }
}

function createDummyBoxes(x, h) {
  fill(255);
  rect(x, canvasHeight - h, blockWidth, h);
}

function swapRect(ar, i, j) {
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}
