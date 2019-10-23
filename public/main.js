const canvasHeight = 500;
const canvasWidth = 1000;
const blockWidth = 5;

var boxHeights = [];
var i = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  createBoxes();
  quickSort(boxHeights, 0, boxHeights.length - 1);
}

function draw() {
  background(0);
  // bubbleSort();
  retainBoxes();
}

async function quickSort(arr, low, high) {
  if (low < high) {
    var pi = await partition(low, high);

    await Promise.all([
      quickSort(arr, low, pi - 1),
      quickSort(arr, pi + 1, high)
    ]);
  } else {
    console.log("done", boxHeights);
    // noLoop();
  }
}

async function partition(low, high) {
  var i = low - 1;
  var p = boxHeights[high];

  for (var j = low; j < high; j++) {
    if (boxHeights[j] <= p) {
      i += 1;
      await swapRect(boxHeights, i, j);
    }
  }
  await swapRect(boxHeights, i + 1, high);

  return i + 1;
}

async function bubbleSort() {
  if (i < boxHeights.length) {
    for (var j = i + 1; j < boxHeights.length; j++) {
      if (boxHeights[j] < boxHeights[i]) {
        await swapRect(boxHeights, i, j);
      }
    }
  } else {
    noLoop();
  }
  i++;
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

async function swapRect(ar, i, j) {
  await sleep(15);
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
