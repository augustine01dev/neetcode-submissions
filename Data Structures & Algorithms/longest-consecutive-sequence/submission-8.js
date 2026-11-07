class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
  longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  const arr = [...new Set(nums)];

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
