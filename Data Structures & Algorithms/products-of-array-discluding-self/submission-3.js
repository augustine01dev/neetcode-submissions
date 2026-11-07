class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
      
     const result = new Array(nums.length).fill(1);

    let prefix = 1;

    // Calculate prefix products
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
 console.log(result,'result',nums)
    let suffix = 1;

    // Calculate suffix products
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
    }
}
