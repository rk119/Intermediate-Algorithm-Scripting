# Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

```javascript
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana"); // returns Dolce &amp; Gabbana

convertHTML('Stuff in "quotation marks"') // returns Stuff in &quot;quotation marks&quot; 
```
  </details>
