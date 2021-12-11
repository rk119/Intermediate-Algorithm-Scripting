# Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

### Challenge

```javascript
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```
### Solution

<details>
<summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function translatePigLatin(str) {
  let ind = str.search(/[aeiou]/gi)
  return ind > 0 ?  str.slice(ind) + str.slice(0,ind) + 'ay' : ind === 0 ? str + 'way' : str + 'ay'
}

translatePigLatin("california"); // returns aliforniacay

translatePigLatin("algorithm"); // returns algorithmway

translatePigLatin("rhythm"); // returns rhythmay
```
</details>
