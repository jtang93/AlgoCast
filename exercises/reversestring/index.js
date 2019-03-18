// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  //solution 1
  // return str
  //   .split('')
  //   .reverse()
  //   .join('')

  // solution 2
  // let reversed = ''
  //
  // for (let char of str) {
  //   reversed = char + reversed
  // }
  //
  // return reversed

  // solution 3
  let asdf = 1
  debugger;
  return str.split('').reduce((reversed, char) => char + reversed, '')

}

reverse('asdf')

module.exports = reverse;
