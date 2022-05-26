/*Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30 */
// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
    const arr = []
    //make loop 0 to rows 
     for (let i = 0; i < numRows; i++) {  
         let row = [1]; // In pascal tringle make sure we set first and last element 1   
         for(let j=1;j<i;j++){ 
             row.push(arr[i-1][j-1] +arr[i-1][j]) // here we are calculating the middle element [1] _ [1]in sequence manner
         }
         if(i > 0 ) row.push(1) // heae checking condition if i > 0 then we push 1 in end of the row
         arr.push(row)
     }
  return arr
 }

generate(5)