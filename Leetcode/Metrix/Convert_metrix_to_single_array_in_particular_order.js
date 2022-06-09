const spiral = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// 0utput=> [1,2,3,4,8,7,6,5,9,10,11,12,16,15,14,13]

const removeTopLeftToRight = (arr) => {
  return [...arr.shift()];
};
const removeRightTopToDown = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    // Down
    res.push(arr[i].pop());
  }
  return res;
};

const removeBottomToTop = (arr) => {
  const res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    //Bottom -> Top
    res.push(arr[i].shift());
  }
  return res;
};
function twoArray(a1) {
  let arr = [];
  arr = removeTopLeftToRight(a1); // Top left right
  arr = [...arr, ...removeRightTopToDown(a1)];
  arr = [...arr, ...a1.pop().reverse()]; // Bottom left
  arr = [...arr, ...removeBottomToTop(a1)];
  arr = [...arr, ...a1.shift()]; // Right
  arr = [...arr, ...a1.pop().reverse()]; //mid left
  console.log("a1", a1);
  return arr;
}

console.log(twoArray(spiral));
