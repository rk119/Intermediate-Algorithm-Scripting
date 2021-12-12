# Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

```javascript
function sumFibs(num) {
  return num;
}

sumFibs(4);
```
<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  ```javascript
 function sumFibs(num) {
  let arr = [1, 1];
  let i = 2;
  while ((arr[i - 1] + arr[i - 2]) <= num) {
    arr.push(arr[i - 1] + arr[i - 2])
    i++
  }
  let sum = (arr.filter(num => num % 2 != 0)).reduce((sumVal, currentVal) => {
    return sumVal + currentVal;
  });
  return sum;
}


sumFibs(4); // returns 5
sumFibs(75024) // returns 60696
  ```
  </details>
