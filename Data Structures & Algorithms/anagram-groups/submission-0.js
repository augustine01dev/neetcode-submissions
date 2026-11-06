class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    
const m1 = new Map()
for(let i = 0 ; i < strs.length ; i ++){
  const s = strs[i].split('').sort().join('');
   const ex = m1.get(s)
  if(ex){
    m1.set(s , [ ...ex , strs[i]])
  }else{
   m1.set(s  ,[strs[i]])
  }
}
  const arr = []
 for(let [ , values] of m1){
   arr.push(values)
 }

  return arr
    }
}
