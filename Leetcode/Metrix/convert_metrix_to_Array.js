const spiral = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// Output=> [1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13]

function twoArray(a1) {
  let res = [];
  for (let i = 0; i < a1.length; i++) {
    if (i % 2 === 0) {
      res.push(...a1[i]);
    } else {
      res.push(...a1[i].reverse());
    }
  }
  return res;
}

function twoArray(a1) {
  let res = [];
  while (a1.length) {
    res.push(...a1.shift(), ...(a1.length ? a1.shift().reverse() : a1));
  }
  return res;
}

// Recursive
function twoArray(a1, res = []) {
  if (a1.length === 0) return res;
  res = [...res, ...a1.shift()];
  res = a1.length ? [...res, ...a1.shift().reverse()] : res;
  return twoArray(a1, res);
}

console.log(twoArray(spiral));
