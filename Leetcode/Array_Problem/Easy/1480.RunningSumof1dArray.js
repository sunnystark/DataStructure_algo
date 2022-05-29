/*Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

var runningSum = function (nums) {
  let ans = [nums[0]]; // create array with 0 index to value nums[0];
  for (let i = 1; i < nums.length; i++) {
       // add prev index value of ans array and current value of nums arr to current index of ans array
    ans[i] = ans[i - 1] + nums[i];
  }
  return ans;
};