// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  // let charArray = str.split('')
  // let distinctChar = new Set(charArray)
  let countObj = {}
  // for (char of distinctChar) {
  //   countObj[char] = 0
  // }

  for (char of str) {
    countObj[char]? countObj[char]++ : countObj[char]=1
    // countObj[char]++
  }

  return Object.keys(countObj).reduce(
    (a,b) => (countObj[a]>countObj[b]?a:b)
  )

  // return countObj

}

module.exports = maxChar;
