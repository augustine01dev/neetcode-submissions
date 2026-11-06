class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
   let map = new Map()
   for(let i = 0 ; i < nums.length ; i ++){
         if(map.has(nums[i])){
            map.set(nums[i] , map.get(nums[i]) + 1)
         }else{
            map.set(nums[i] , 1)
         }
     }
    const sMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]))

    let j = 0
    const arr = []
    const unique = []
    for (const [key,value] of sMap){
      if(k > j){
        arr.push(key)
      }
      if(value === 1){
        unique.push(key)
      }
      j++
    }
    if(unique.length === nums.length && arr.length === 0){
      return unique
    }
    
    return arr
}
}