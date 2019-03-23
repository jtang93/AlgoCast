// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArray = []
  strArray = str.split(' ')
  for (i=0;i<strArray.length;i++) {
    strArray[i]=strArray[i].split('')
    strArray[i][0]=strArray[i][0].toUpperCase()
    strArray[i]=strArray[i].join('')
  }

  return strArray.join(' ')
}

module.exports = capitalize;
