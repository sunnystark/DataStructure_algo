/*
ALgo -: TimeComplexity: O(n2)
 
begin bubbleSort(list)
    for all element of list
        if list[i] > list[i+1]
            swep(list[i], list[i+1])
        end if
    end for
    return list
 end bubbleSort
 */

//  Example
const list = [14, 33, 27, 35, 10];

const swep = (item1, item2) => {
  let temp = item1;
  item1 = item2;
  item2 = temp;
  return { item1, item2 };
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
       const {item1, item2} = swep(arr[j], arr[j + 1]);
       arr[j] = item1;
       arr[j+1] = item2;
      }
    }
  }
  return arr;
};

bubbleSort(list);
