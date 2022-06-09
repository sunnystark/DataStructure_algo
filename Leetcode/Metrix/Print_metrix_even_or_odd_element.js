// const arr = [[1,3], [2,4]]

function twoArray(rows, cols) {
  const currentRow = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const innerArr = [];
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      if (colIndex % 2 === 0) {
        innerArr.push(rows * colIndex + 1 + rowIndex);
      } else {
        innerArr.push(rows * colIndex + 1 + rowIndex);
      }
    }
    currentRow.push(innerArr);
  }
  return currentRow;
}

console.log(twoArray(2, 2));
