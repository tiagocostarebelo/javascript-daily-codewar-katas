# Tribonacci Sequence- `tribonacci(signature, n)`
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

```
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
```

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

```
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
```

Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

**Problem source:** [Codewars - Tribonacci Sequence](https://www.codewars.com/kata/556deca17c58da83c00002db/)

## Examples

```
Itribonacci([1, 1, 1], 10) // Returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105];
Itribonacci([0,0,1], 10) // Returns [0,0,1,1,2,4,7,13,24,44];

```


## Approach

My first technical interview challenge me to do a Fibonacci sequence,so, coming up to this challenge, I knew I had something familiar in hands, but with a twist.
The Tribonacci sequence requires the sum of 3 elements, not just 2.

So, initially I wrote the Fibonacci sequence as I knew it, then adjusted to handle the additional element.

Next steps involved cleaning the solution, while also adjusting it to a few errors I was having while testing, in handling any inputs that suggested a length bellow 3.

My first solution passed, however, I noticed a random test appearing during cleaning up that would fail it, so I went back again and solved this challenge with a more robust solution.


## Final Solution

```
tribonacci(signature, n) {
    if (n == 0) return [];
    if (n < 3) return signature.slice(0, n);

    let tribArray = [...signature];
    let currNumber;

    for (let i = 0; i < n - 3; i++) {
        currNumber = tribArray[i] + tribArray[i + 1] + tribArray[i + 2];
        tribArray.push(currNumber)
    };
    return tribArray;
}
```

## Edge Cases & Validation

- Returns an empty array when n = 0.
- Correctly truncates the signature when n < 3.
- Does not mutate the original signature array.
- Handles large n values efficiently with linear time complexity O(n).


## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
