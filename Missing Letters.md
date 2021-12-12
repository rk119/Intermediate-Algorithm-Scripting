# Missing Letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

```javascript
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function fearNotLetter(str) {
  let startCharCode = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) != startCharCode) {
      return String.fromCharCode(startCharCode)
    }
    else startCharCode++
  }
}

fearNotLetter("abce"); // returns d

fearNotLetter("stvwx") // returns u

fearNotLetter("abcdefghijklmnopqrstuvwxyz") // returns undefined
```
                                 </details>
