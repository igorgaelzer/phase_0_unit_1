// I paired with Gunnari Auvinen on this challenge.

// __________________________________________
// Write your code below.

var secretNumber = 7;

var password = 'just open the door';

var allowedIn = false;

var members = ['John','Gunnari', 'Igor', 'Mary', 'Ian', 'Jessica'];


/* __________________________________________
Reflection: Use the reflection guidelines to write a reflection here. 

What parts of your strategy worked? What problems did you face?
  Everything worked fine. Once I undertood the syntax it was actually pretty easy.

What questions did you have while coding? What resources did you find to help you answer them?
  Mostly I was having problems understanding how the objects work in different situations, but Gunnari was really helpfull and guided me through all the steps.

What concepts are you having trouble with, or did you just figure something out? If so, what?
  Mostly formatting and syntax. Once my eyes got used to it I could undestand it just fine.

Did you learn any new skills or tricks?
  Yes. I learned the JS and OOP basics.

How confident are you with each of the Learning Competencies?
  I feel like I understand it well but I have to apply my knowledge on real problems for it to be well fixed in my mind.

Which parts of the challenge did you enjoy?
  I enjoyed getting my codes passed the tests.

Which parts of the challenge did you find tedious?
  The reading material was pretty intense and I was reading about lots of solutions to problems I did not have and did not undestand. Sometimes I don't like to prepare myself too much and go too much into future problems without at least having a supperficial feel of what they are.

*/

// __________________________________________
// Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

