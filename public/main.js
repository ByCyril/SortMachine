const canvasHeight = 500;
const canvasWidth = 1000;
const blockWidth = 7;

var boxHeights = [];
var algo = "";

function changeAlgo(algo) {
  this.algo = algo;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createBoxes();
  if (algo == "quicksort.js") {
    quickSort(boxHeights, 0, boxHeights.length - 1);
  } else if (algo == "bubblesort.js") {
    frameRate(15);
  } else if (algo == "mergesort.js") {
    mergeSort(0, boxHeights.length - 1);
  } else {
  }
}

function draw() {
  background(0);
  if (algo == "bubblesort.js") {
    bubbleSort();
  }
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

function createBoxes() {
  for (var i = 0; i < 1000; i = i + blockWidth) {
    var h = Math.floor(Math.random() * 500 + 1);
    boxHeights.push(h);
    rect(i, canvasHeight - (h + 5), blockWidth, h);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
