let moveZerosToLeft = function (A) {
  let arr = [],
    c = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) A[c++] = A[i];
    else arr.push(A[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) A[c++] = arr[i];
  }
  return A;
};

moveZerosToLeft([1, 10, -1, 11, 5, 0, -7, 0, 25, -35]);
//    output = [0,0,1,10,-1,11,5,-7,25,-35]
