var i = 0;

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
}

async function swapRect(ar, i, j) {
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}
