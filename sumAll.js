/**
 * Sum All Numbers in a Range
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
 *
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 *
 * Tests:
 * 1) sumAll([5, 10]) should return 45.
 * 2) sumAll([10, 5]) should return 45.
 **/

function sumAll(arr) {
  let min = arr.reduce((a,b) => a<b ? a : b);
  let max = arr.reduce((a,b) => a>b ? a : b);
  let newArr = Array.from(new Array((max+1) - min), (x, i) => i + min);
  return newArr.reduce((sum, num) => sum+num);
}

console.log(sumAll([5, 10]));
