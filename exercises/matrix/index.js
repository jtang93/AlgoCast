// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//  matrix(5)
// [[1,  2,  3, 4, 5],
// [16, 17, 18, 19, 6],
// [15, 24, 25, 20, 7],
// [14, 23, 22, 21, 8],
// [13, 12, 11, 10, 9]]

// 1 ,2 ,3 ,4 ,5 ,6
// 20,21,22,23,24,7
// 19,32,33,34,25,8
// 18,31,36,35,26,9
// 17,30,29,28,27,10
// 16,15,14,13,12,11
function matrix(n, limit = n*n, c=-1, r=0, i=0, arr=makeArray(n), l=0, o=n) {

  //basecase
  if (i === limit) {
    console.log(arr)
    return arr
  }
  //after each level
  if (r-1 === l && c === l) {
    c++
    l++
    i++
    arr[l][l] = i
    console.log('starting new level', r,c,i, l)
    return matrix(n-2, limit, c, r, i, arr, l, o)
  }
  //bottom to top
  if (c === l && r > l ) {
    i++
    r--
    arr[r][c] = i
    console.log('moving bottom to top', r, c, i)
    return matrix(n, limit, c, r, i, arr, l, o)
  }
  //right to left
  if (r === o-1-l && c <= o-1-l) {
    i++
    c--
    arr[r][c]=i
    console.log('moving right to left', r, c, i)
    return matrix(n, limit, c, r, i, arr, l, o)
  }
  //top to bottom
  if (c === o-1-l) {
    i++
    r++
    arr[r][c]=i
    console.log('moving top to bottom', r, c, i)
    return matrix(n, limit, c, r, i, arr, l, o)
  }
  //left to right
  if (c-l < o) {
    i++
    c++
    arr[r][c]=i
    console.log('moving left to right', r, c, i)
    return matrix(n, limit, c, r, i, arr, l, o)
  }

}

let makeArray = (n) => {
  let arr = []
  for (i = 0; i < n; i++) {
    arr.push([])
  }
  return arr
}

// console.log(matrix(6))

/*
if column < n, increment column
if column === n, increment row
if column and row === n, decrement column
if column === 0 and row === n, decrement row until it hits 1


*/


module.exports = matrix;
