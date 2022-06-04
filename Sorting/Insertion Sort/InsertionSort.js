/*
 ALgo -: TimeComplexity: O(n2)

if it is a first element it is already sorted then return -1
pick the next element
compare with all element in sorted sub-list;
shift all the elements in the sorted sub-list that is greater than the value to be sorted
insert the value
Repeat until list is sorted
*/
// Example
const list = [14, 33, 27, 35, 10];
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let curr = arr[i],
        j;
      for (j = i - 1; j >= 0 && curr > arr[j]; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = curr;
    }
    return arr;
  };
  
  console.log(insertionSort(list));