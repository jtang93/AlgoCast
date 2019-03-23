// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  //solution with sort
  return sortify(stringA)===sortify(stringB)

  //solution with hash map
  // let objA = objectfy(stringA)
  // let objB = objectfy(stringB)
  // if (Object.keys(objA).length===Object.keys(objB).length) {
  //   for (el in objA) {
  //     if (objA[el]===objB[el] && objB[el]===objA[el]) {
  //       return true
  //     }
  //   }
  // }
  // else {
  //   return false
  // }

}

let sortify = (str) => str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')

let objectfy = (str) => {
  let obj = {}
  let cleanString = str.replace(/[^\w]/g,"").toLowerCase()
  for (char of cleanString) {
    obj[char]?obj[char]++:obj[char] = 1
  }
  return obj
}

module.exports = anagrams;
