# Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

### Challenge

``` javascript 
function diffArray(arr1, arr2) {
  const newArr = [];
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

### Solution

<details>
  <summary>Warning! Spoiler ahead...</summary>

``` javascript 
function diffArray(arr1, arr2) {
const newArr = arr1.concat(arr2);
return newArr.filter((element) => {
  if (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) {
    return element;
  }});
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // returns [4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // returns ["piglet", 4]
```
</details>
