// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// interative solution
// function steps(n) {
//
//   let arr = []
//   for (i = 0; i < n; i++) {
//     arr.push(' ')
//   }
//   for (i = 0; i < arr.length; i++) {
//     arr[i]= '#'
//     console.log(arr.join(''))
//   }
//
// }

// recursive solution
function steps(n, row = 0, stair = '') {

  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  }
  else {
    stair += ' '
  }
  steps(n, row, stair)

  //refactored if statement with ternary
  // const add = stair.length <= row ? '#' : ' '
  // steps(n, row, stair+add)

  //refactored into one big if else statement
  // if (stair.length <= row) {
  //   stair += '#'
  //   steps(n, row, stair)
  // }
  // else if (stair.length < n){
  //   stair += ' '
  //   steps(n, row, stair)
  // }
  // else {
  //   console.log(stair)
  //   return steps(n, row + 1)
  // }



}

module.exports = steps;
