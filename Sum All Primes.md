# Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

```javascript
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

### Solution

<details>
  <summary>Click here for the spoiler...:shushing_face:</summary>
  
  
```javascript
function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((val) => i % val != 0))
      primes.push(i);
  } 
  return primes.reduce((sum, prime) => sum + prime, 0)
}

sumPrimes(10); // returns 17
```
</details>
