var a = [10, 7, 8, 9, 1, 5];

function partition(arr, low, high) {
  var i = low - 1;
  var p = arr[high];

  for (var j = low; j < high; j++) {
    if (arr[j] < p) {
      i += 1;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// for (var i = 0; i < 50; i++) {
//   var h = Math.floor(Math.random() * 500 + 1);
//   a.push(h);
// }

quickSort(a, 0, a.length - 1);
console.log(a);
