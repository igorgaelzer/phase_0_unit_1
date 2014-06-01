
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 125,
  hairColor: "brown",
  eyeColor: "brown",
}



// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
// terah.eyeColor = undefined;
delete terah.eyeColor;
terah.spouse.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines
/*

What parts of your strategy worked? What problems did you face?
I'm having a hard time understanding exactly what I'm supposed to do. It took me a long time to realize that I wasn`t supposed to change tarah's object to pass the test, which was a little frustrating. More precise instructions would be welcomed.


What questions did you have while coding? What resources did you find to help you answer them?
Am I supposed to delet tarah's eyeColor completely or just set its value to undefined? I just went ahead and deleted it.

What concepts are you having trouble with, or did you just figure something out? If so, what?
Not having troubles with code logic.

Did you learn any new skills or tricks?
I learned how to delete a property of an object.

How confident are you with each of the Learning Competencies?
8 out of 10.

Which parts of the challenge did you enjoy?
...

Which parts of the challenge did you find tedious?
Not knowing what to do for a long time to pass the test.

*/
// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)