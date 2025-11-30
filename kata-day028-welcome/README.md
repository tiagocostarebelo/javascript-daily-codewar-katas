# Welcome - `greet(language)`
The challenge: 
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

The Database
Please modify this as appropriate for your language.

[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]

**Problem source:** [Codewars - Welcome](https://www.codewars.com/kata/577ff15ad648a14b780000e7)

## Examples

```
greet("english") // -> Result: "Welcome
```

## Approach

The task is essentially a lookup problem: given a language string, return the corresponding greeting from a predefined “database.”
A JavaScript object works perfectly for this purpose because it provides constant-time key lookup and clean, readable syntax.

The logic becomes:

- Store all languages and greetings in an object (langs).
- Validate that the input is a string — if not, fall back to English.
- Check whether the language exists as a key in the object.
- If it does, return its greeting; otherwise, return the default "Welcome".

This keeps the function simple and predictable, and avoids unnecessary conditionals or large switch statements.


## Final Solution

```
function greet(language) {
    const langs = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso"
    };;
    if (typeof language !== 'string') return 'Welcome';
    return langs[language] || 'Welcome';
}
```

## Edge Cases & Validation

- If the input is not a string, default to "Welcome".
- If the input string does not match any known language, return "Welcome".
- Handles mixed or unexpected casing as long as the caller passes normalized keys (kata does not require auto-lowercasing).
- Works even if additional languages are appended to the database.
- Empty string ("") also defaults to "Welcome".

## Tests - How to run

This repo includes a minimal test file using Jest

```
npm install
```

```
npm test
```
