/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
Share Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
 Example 1:
 
 Input: nums1 = [1,3], nums2 = [2]
 Output: 2.00000
 Explanation: merged array = [1,2,3] and median is 2.
 Example 2:
 
 Input: nums1 = [1,2], nums2 = [3,4]
 Output: 2.50000
 Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  
 Constraints:
 
 nums1.length == m
 nums2.length == n
 0 <= m <= 1000
 0 <= n <= 1000
 1 <= m + n <= 2000
 -106 <= nums1[i], nums2[i] <= 106*/


 var findMedianSortedArrays = function(nums1, nums2) {
    let resulr, start, end, mid
   // marge both the sorted array
    let a = ([...nums1,...nums2])
    // try to do sort we can compress the login eg. [...nums1,...nums2].sort()
    let res =  a.sort((a,b) => a-b)
    // here I am checking marge array even / odd based on marge array length
      if(res.length % 2 === 0){
          mid = Math.floor(res.length / 2)
          start = res.slice(0,mid) , end = res.slice(mid)
          resulr = (start[start.length-1] + end[0])/2
     } else{
         mid = Math.floor(res.length / 2)
         resulr = res[mid]
     }
    
   // return a complete array 
   return resulr
       
   }