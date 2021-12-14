# Make a Person
Fill in the object constructor with the following methods below:

```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
```
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.

```javascript
const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
const Person = function(firstAndLast) {
  let full = firstAndLast;

  this.getFirstName = function() {
    return full.split(" ")[0];
  }
  this.getLastName = function(){
    return full.split(" ")[1];
  }
  this.getFullName = function() {
    return full;
  };
  this.setFirstName = function(first) {
    full = first + " " + this.getLastName();
  }
  this.setLastName = function(last){
      full = this.getFirstName() + " " + last;

  }
  this.setFullName = function(firstAndLast) {
    full = firstAndLast;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName(); // returns Bob Ross
bob.setFirstName("Haskell")
bob.getFullName() // returns Haskell Ross 
```
  </details>
