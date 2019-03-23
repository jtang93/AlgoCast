// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  // return str.split('').reverse().join('')===str

  // return str.split('').every((char, i) => {
  //     return char === str[str.length - i -1]
  //   }
  // )

  let strArray = str.split('')
  let isPalindrome = null
  for (i = 0; i <= Math.floor(strArray.length/2); i++) {
    // strArray[i]===strArray[strArray.length-1-i]? isPalindrome=true : return false
    if (strArray[i]===strArray[strArray.length-1-i]) {
      isPalindrome = true
    }
    else {
      return false
    }
  }
  return isPalindrome
}

module.exports = palindrome;
