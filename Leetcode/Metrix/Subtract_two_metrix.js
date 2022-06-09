const arr1 = [
  [4, 5, 6],
  [7, 8, 9],
  [7, 8, 9],
];
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
];
// Output=> [[3,3, 3],[3,3, 3]

function twoArray(a1, a2, n = 3) {
  const arr = Array.from(Array(n), () => Array(n));
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      arr[i][j] = a1[i][j] - a2[i][j];
    }
  }
  return arr;
}

console.log(twoArray(arr1, arr2));
