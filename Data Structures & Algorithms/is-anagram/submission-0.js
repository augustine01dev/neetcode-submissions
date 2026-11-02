class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false
         let m1 = new Map()
         let m2 = new Map()

         for(let i=0 ; i < s.length ; i ++){
            if(m1.has(s[i])){
            const mp1 = m1.get(s[i])
            m1.set(s[i] , mp1 + 1)
            }else{
          m1.set(s[i] ,  1)
            }

                     if(m2.has(t[i])){
            const mp1 = m2.get(t[i])
            m2.set(t[i] , mp1 + 1)
            }else{
          m2.set(t[i] ,  1)
            }
         }

     if(m1.size !== m2.size) return false
      for(const [k , v] of m1){
        const v2 = m2.get(k)
        if(v !== v2){
          return false
        }
           
         }
     return true
    }
}
