class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

         let nss = ''
  for(let i = 0 ; i < s.length; i++){
     const isLowercase = s[i].toLowerCase() >= 'a' && s[i].toLowerCase() <= 'z';
  const isNumber = s >= '0' && s <= '9';
    if((isLowercase || isNumber)) {
     nss = nss + s[i].toLowerCase() 
 }
  }
  let e = nss.length - 1
  let m = Math.floor(nss.length / 2)
  for(let n = 0 ; n < m; n++){
    if(nss[n] !== nss[e]){
      return false
    }
    e--
  }
  return true  
    }
}
