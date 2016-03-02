# Class7
Make a function the looks ahead one item to check if things are the same (`i + 1`)

Takes in an array:
```javascript
var listOfNames0 = ["Talia", "Joana", "Amy"];
var listOfNames1 = ["bill", "Bill", "Bill"];
var listOfNames2 = ["Joe", "bill", "George"];
var listOfNames3 = ["Amy", "Jane", "Jill"];
var listOfNames4 = ["Bill"];
var listOfNames5 = ["Bill", "bill", "Bill", undefined]
var listOfNames6 = ["Bill", "bill", "Bill", undefined, undefined] // Anthony Only.
```

and outputs a boolean, `true` if two names are the same in a row.

Call it `isSameNameTwice`

```javascript
//Test cases:
isSameNameTwice(listOfNames0) // -> false
isSameNameTwice(listOfNames1) // -> true
isSameNameTwice(listOfNames2) // -> false
isSameNameTwice(listOfNames3) // -> false
isSameNameTwice(listOfNames4) // -> false
isSameNameTwice(listOfnames5) // -> false
isSameNameTwice(listOfnames6) // -> false
```

You can test using `console.log(isSameNameTwice(listOfNames))`
