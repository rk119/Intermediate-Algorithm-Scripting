# Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

```javascript
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
```
If either argument isn't a valid number, return undefined.

```javascript
function addTogether() {
  return false;
}

addTogether(2,3);
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>

```javascript
function addTogether() {
  if (typeof(arguments[0]) != "number")
    return undefined;
  if (arguments[1] == undefined)
    return (second) => addTogether(arguments[0], second);
  if (typeof(arguments[1]) != "number")
    return undefined;
    
  return arguments[0] + arguments[1];
}

addTogether(5)(7); // returns 12
addTogether(2, "3") // returns undefined
addTogether(2, 3) // returns 5
```
  </details>
