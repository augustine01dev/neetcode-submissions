class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(strs) {
    if(!strs.length) return '&&&&'
   let result = strs[0]
  for(let i = 1;i < strs.length ; i++){
    result = result +'#%$%' + strs[i]
  }

  return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
     decode(str) {
            if(str === '&&&&') return []
       if(!str) return [""]
      const arr = str.split('#%$%')
      return arr
    }
}
