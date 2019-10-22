const canvasHeight = 505;
const canvasWidth = 1005;
const blockWidth = 5;

var boxHeights = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createBoxes();
  frameRate(25);
}

function draw() {
  background(0);
  bubbleSort();
}

i = 0;

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

  for (let i = 0; i < boxHeights.length; i++) {
    fill(255);
    rect(
      i * blockWidth,
      canvasHeight - (boxHeights[i] + 5),
      blockWidth,
      boxHeights[i]
    );
  }
}

function createBoxes() {
  for (var i = 0; i < 1000; i = i + blockWidth) {
    var h = Math.floor(Math.random() * 500 + 1);
    boxHeights.push(h);
    rect(i, canvasHeight - (h + 5), blockWidth, h);
  }
  console.log("made", boxHeights);
}

function swapRect(ar, i, j) {
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}
