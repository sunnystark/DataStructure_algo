/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 

Input: nums = [0,4,3,0] target = 0
Output: [0,3];*/

// solution 1

const getIndex = (arr, val) => arr.findIndex((ele) => ele === val);

const twoSum = function (nums, target) {
  let obj = {},
    indexes = []; // create object for comparing value and array for return indexes of indices of the two numbers
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] || obj[nums[i]] === 0) {
      // check the value at particular key inside object is exist or zero
      indexes.push(getIndex(nums, obj[nums[i]]), i);
    } else {
      obj[target - nums[i]] = nums[i]; // otherwise adding the key[target - value] and value in object
    }
  }
  return indexes;
};

// solution 2 Note - this solution is not working if array is unsorted order. because indexes has been change after sorting.

const twoSum1 = function (nums, target) {
  nums.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    } else if (nums[left] + nums[right] > target) {
      right--;
    } else {
      left--;
    }
  }
};
