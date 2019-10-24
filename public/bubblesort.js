var i = 0;
var j = 0;

function bubbleSort() {
  if (i < boxHeights.length) {
    for (var j = 0; j < boxHeights.length - i - 1; j++) {
      if (boxHeights[j] > boxHeights[j + 1]) {
        swapRect(boxHeights, j, j + 1);
      }
    }
  } else {
    noLoop();
  }
  i++;
}

function swapRect(ar, i, j) {
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}
