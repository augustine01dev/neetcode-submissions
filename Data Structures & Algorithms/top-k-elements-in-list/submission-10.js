class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = new Map();

    // Count frequencies
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Sort by frequency (descending)
    const sortedMap = new Map(
        [...map.entries()].sort((a, b) => b[1] - a[1])
    );

    // Get top K frequent elements
    return [...sortedMap.keys()].slice(0, k);
}
}