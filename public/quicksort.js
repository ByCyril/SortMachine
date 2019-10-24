async function quickSort(arr, low, high) {
  if (low < high) {
    var pi = await partition(low, high);

    await Promise.all([
      quickSort(arr, low, pi - 1),
      quickSort(arr, pi + 1, high)
    ]);
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

async function swapRect(ar, i, j) {
  await sleep(20);
  let temp = ar[i];
  ar[i] = ar[j];
  ar[j] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
