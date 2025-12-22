# Extract Domain Name from URL - `domainName(url)`
The challenge: 
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

**Problem source:** [Codewars - Extract Domain Name from URL](https://www.codewars.com/kata/514a024011ea4fb54200004b)

## Examples

```
domainName("https://google.com") // -> Result: "google
```

## Approach

The goal is to reliably extract the domain name only, regardless of protocol, subdomains, or URL paths.

To keep the solution robust and readable, I broke the process into small, focused steps:
1. Remove the protocol
- Strip out http://, https://, or any similar protocol prefix using a regular expression.
2. Isolate the host
- Split the remaining string at characters that indicate the start of a path, query, or fragment (/, ?, #) and keep only the host part.
3. Remove common subdomains
- Strip the www. prefix if it exists, since it’s not part of the domain name itself.
4. Extract the domain name
- Split the cleaned host by "." and return the first segment, which represents the domain name.

This step-by-step approach avoids overcomplicated regex and makes the logic easy to follow and maintain.

## Final Solution

```
function domainName(url){
  const withoutProtocol = url.replace(/^[a-z]+:\/\//i, "");
  const host = withoutProtocol.split(/[/?#]/)[0];
  const cleanHost = host.replace(/^www\./i, "");
  return cleanHost.split(".")[0]
}
```

## Edge Cases & Validation

- Works with or without protocol (http, https).
- Handles URLs with paths, query strings, or fragments.
- Correctly removes the www. prefix when present.
- Works with plain domains like "google.com".
- Handles mixed casing in protocols and www.
- Assumes valid URLs as guaranteed by the kata.

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
