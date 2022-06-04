/*
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.
Return the maximum amount of split balanced strings.

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
*/
var balancedStringSplit = function(s) {
    let count = 0, strCount = 0, balancedStr = 0;
    for(let i =0; i < s.length; i++){
      strCount =  s[i] === "L" ? count++ : count--;
        if(strCount === 0){
           balancedStr ++; 
        }
    }
    return balancedStr
};