# Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

### Challenge

```javascript
function destroyer(arr) {
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
```
### Solution

```javascript
function destroyer(arr) {
  let args = [...arguments].slice(1)
  return arr.filter((val) => !args.includes(val))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1,1]
destroyer(["tree", "hamburger", 53], "tree", 53); // returns ["hamburger"]
```
