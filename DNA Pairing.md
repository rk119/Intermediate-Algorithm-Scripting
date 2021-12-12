# DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

### Challenge

```javascript
function pairElement(str) {
  return str;
}

pairElement("GCG");
```
### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function pairElement(str) {
  let arr = [];
  for (let i = 0; i<str.length; i++) {
    str[i] == 'A' ? arr.push([str[i],'T']) : 
    str[i] == 'T' ? arr.push([str[i],'A']) :
    str[i] == 'C' ? arr.push([str[i],'G']) : arr.push([str[i],'C']);
  }
  return arr;
}

pairElement("GCG"); // returns [["G", "C"], ["C","G"], ["G", "C"]]

pairElement("CTCTA") // returns [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
```
                                </details>
