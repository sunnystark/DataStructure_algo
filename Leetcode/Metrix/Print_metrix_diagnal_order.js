function twoArray(rows, cols) {
  let currentRow = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      if (colIndex % 2 === 0) {
        // 0% 2 = 0
        let evenArr = [rows * colIndex + 1 + rowIndex]; // 2*0+1 + 0
        console.log(evenArr, "kk"); //1

        currentRow.push(rows * colIndex + 1 + rowIndex);
      } else {
        let oddArr = [rows * (colIndex + 1) - rowIndex]; // 2*(1+1)-0 = 4
        console.log(oddArr, "ss"); //4
        currentRow.push(rows * (colIndex + 1) - rowIndex);
      }
    }
  }
  return currentRow;
}

console.log(twoArray(2, 2));

// Output = [[1,4],[2,3]] or (3,3) => [[1,6,7] [2,5,8] [3,4,9]]
