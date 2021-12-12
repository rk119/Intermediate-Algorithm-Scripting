# Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

### Challenge

```javascript
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
### Solution

<details>
  <summary>Click here for the spoiler...🤫</summary>
  
  
```javascript
function myReplace(str, before, after) {
  return /[A-Z]/.test(str[str.indexOf(before)]) ? str.replace(before,after.charAt(0).toUpperCase() + after.slice(1)) : 
  str.replace(before,after.charAt(0).toLowerCase() + after.slice(1));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); // returns A quick brown fox leaped over the lazy dog

myReplace("I think we should look up there", "up", "Down"); // returns I think we should look down there

myReplace("His name is Tom", "Tom", "john") // returns His name is John
```
</details>
