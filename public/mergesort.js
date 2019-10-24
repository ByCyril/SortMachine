async function merge(start, m, e) {
  var start2 = m + 1;

  if (boxHeights[m] <= boxHeights[start2]) {
    return;
  }

  while (start <= m && start2 <= e) {
    if (boxHeights[start] <= boxHeights[start2]) {
      start++;
    } else {
      var value = boxHeights[start2];
      var index = start2;

      while (index != start) {
        await swapRect(boxHeights[index - 1], index);
        index--;
      }

      await swapRect(value, start);

      start++;
      m++;
      start2++;
    }
  }
}

async function mergeSort(l, r) {
  if (l < r) {
    var m = parseInt(l + (r - l) / 2);
    await mergeSort(l, m);
    await mergeSort(m + 1, r);
    await merge(l, m, r);
  }
}

async function swapRect(value, i) {
  await sleep(2);
  boxHeights[i] = value;
}
