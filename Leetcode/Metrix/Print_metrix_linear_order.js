// let row = 3,  col = 3;

let displayArray = function (r, c) {
  let arr = [],
    res = [];
  for (let i = 1; i <= r * c; i++) {
    if (i % r == 0) {
      res.push([...arr, i]);
      arr = [];
    } else {
      arr.push(i);
    }
  }
  return res;
};

console.log(displayArray(row, col));
// OutPut = [[1,2,3],[4,5,6],[7,8,9]]
