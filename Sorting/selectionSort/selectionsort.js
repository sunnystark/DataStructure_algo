/*
ALgo -: TimeComplexity: O(n2)
 set min to location 0;
 search the minimum element in the list
 Swep the minimun element with value of location min;
 Increment min to point next location
 Repeat until list is sorted.

*/
// Example
const list = [14, 33, 27, 35, 10];

const swep = (item1, item2) => {
  let temp = item1;
  item1 = item2;
  item2 = temp;
  return { item1, item2 };
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      const { item1, item2 } = swep(arr[i], arr[min]);
      console.log(item1, item2);
      arr[i] = item1;
      arr[min] = item2;
    }
  }
  return arr;
};

console.log(selectionSort(list));
