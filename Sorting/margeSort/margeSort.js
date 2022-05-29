/*
Algo -:
 if it is only one element in the list it is already sorted and return;
 divide the list recursively into two halves until it can no more be divide
 merge the smaller list into new list in sorted order.

*/
// Example
const list = [14, 33, 27, 35, 10];

const merge = (left, right) => {
  let sortedArr = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};
const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.splice(0, mid);
  // console.log(left, arr);
  return merge(mergeSort(left), mergeSort(arr));
};

console.log(mergeSort(list));
