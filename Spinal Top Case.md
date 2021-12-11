# Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

### Challenge
```javascript
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>

```javascript
function spinalCase(str) {
  return str.trim().replace(/([a-z])([A-Z])|[_|\s]+/g, '$1-$2').toLowerCase();
}

spinalCase("This Is Spinal Tap"); // returns this-is-spinal-tap

spinalCase("AllThe-small Things") // returns all-the-small-things

spinalCase("The_Andy_Griffith_Show") // returns the-andy-griffith-show
```
</details>
