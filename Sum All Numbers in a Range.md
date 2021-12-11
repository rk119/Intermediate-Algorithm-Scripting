### Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

### Challenge

```javascript
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function sumAll(arr) {
  let min = arr.reduce((a,b) => a<b ? a : b);
  let max = arr.reduce((a,b) => a>b ? a : b);
  let newArr = Array.from(new Array((max + 1) - min), (x, i) => i + min);
  return newArr.reduce((sum, num) => sum + num);
}
  
sumAll([1, 4])); // returns 10
sumAll([5, 10])); // returns 45 
```
</details>
