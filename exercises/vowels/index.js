// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

  // let obj = {}
  // for (char of str.toLowerCase()) {
  //   obj[char] ? obj[char]++ : obj[char] = 1
  // }
  //
  // let count = 0
  // let vowelsArr = ['a','e','i','o','u']
  // for (char of vowelsArr) {
  //   obj[char] ? count += obj[char] : count
  // }
  //
  // return count

  let count = 0
  let letters = ['a','e','i','o','u']
  for (char of str.toLowerCase()) {
    letters.includes(char)?count++:count
  }
  return count

  //regex solution
  // return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0

}

module.exports = vowels;
