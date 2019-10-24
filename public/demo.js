async function heapSort() {
  var n = boxHeights.length;
  for (var i = n / 2 - 1; i >= 0; i--) {
    await heapify(n, i);
  }

  for (var i = n - 1; i >= 0; i--) {
    await swap(i, 0);
    await heapify(i, 0);
  }
}

async function heapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && boxHeights[l] > boxHeights[largest]) largest = l;

  if (r < n && boxHeights[r] > boxHeights[largest]) largest = r;

  if (largest != i) {
    await swap(largest, i);
    await heapify(n, largest);
  }
}

async function swap(i, j) {
  await sleep(5);
  var temp = boxHeights[j];
  boxHeights[j] = boxHeights[i];
  boxHeights[i] = temp;
}
