/**
 * Problem statement:
 * Well met with Fibonacci bigger brother, AKA Tribonacci. 
 * As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
 * won't get to hear non-native Italian speakers trying to pronounce it :(So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
 * 
 * [1, 1 ,1, 3, 5, 9, 17, 31, ...]
 * 
 * But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we
 * would get the same sequence shifted by 2 places, but that is not the case and we would get:
 * 
 * [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
 * 
 * Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so 
 * eeded sequence.
 * Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not
 * clearly specified ;)
 * 
 * @param { signature } array - The provided initial array of 3 numbers the base of the tribonacci sequence
 * @param { n } number - The number of elements of the tribonacci sequence to be returned
 * @returns { array  } Returns the array of numbers with the exact number of elements provided in n
 * 
 * @example
 * Itribonacci([1, 1, 1], 10) // Returns [1, 1, 1, 3, 5, 9, 17, 31, 57, 105];
 * Itribonacci([0,0,1], 10) // Returns [0,0,1,1,2,4,7,13,24,44];
 * 
 */

export function tribonacci(signature, n) {
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