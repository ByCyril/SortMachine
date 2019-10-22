var a = [7, 2, 1, 8, 6, 3, 5, 4];

var p = 7;
var i = -1;
var j = 0;

while (j < p) {
  if (a[j] < a[p]) {
    i++;
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  j++;

  if (j == p) {
    let temp = a[i + 1];
    a[i + 1] = a[p];
    a[p] = temp;

    break;
  }
}

console.log(a);
