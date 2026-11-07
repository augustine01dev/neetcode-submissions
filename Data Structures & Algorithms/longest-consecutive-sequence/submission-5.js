class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0
  if (nums.length === 1) return 1;
  nums.sort((a, b) => a - b);
  const unique = new Set(nums);
  const arr = [...unique];
  if (arr.length === 1) return 1;

  let count = 1;
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      count++;
    } else {
      count = 1;
    }

    max = Math.max(max, count);
  }

  return max;
    }

  
}
