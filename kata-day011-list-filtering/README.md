# List Filtering - `filter_list(l)`
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


**Problem source:** [Codewars - List Filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/)

## Examples

```
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```


## Approach

A straightforward filtering challenge focused on type checking.
The goal is to return only numeric elements from the given array.
To achieve this, I used the .filter() method to iterate through each item and applied a simple typeof check to exclude all strings.

This approach keeps the solution clean, readable, and efficient, avoiding unnecessary conditionals or mutations.

## Final Solution

```
function filter_list(l) {
    const result = l.filter((item) => typeof item !== 'string')
    return result;
}
```

## Edge Cases & Validation

- Returns an empty array if the input array is empty.
- Correctly handles arrays with only strings (returns []).
- Handles arrays containing mixed or nested data types (filters only top-level strings).

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
