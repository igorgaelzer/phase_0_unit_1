// My role in the group is: Release 2, Person 3, Translate Pseudocode into Code

// Here is my part of the challenge:


var sum = function(arrayA) {
	if(arrayA.length === 0) {
		return 0;
	} else {
		return arrayA[0] + (eval(arrayA.join('+')) - arrayA[0]); // This seemed overcomplicated to me. Why not just simply sum all the numbers?
	}
};


var mean = function(arrayB) {
	if(arrayB === 0) {
		return 0;
	} else {
		return eval(arrayB.join('+')) / arrayB.length; // We can use the function sum we just created here
	}
};


var median = function(arrayC) {
	arrayC.sort();
	var middle = arrayC.length / 2;
	if((arrayC.length % 2) !== 0) {
		return arrayC[middle - 0.5]; 
	} else {
		return (arrayC[middle] + arrayC[middle - 1]) / 2;
	}
	
};


// Below this line, I'm just calling the functions to test the syntax.

oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


sum(oddLengthArray); // Works with no errors!!!

mean(oddLengthArray); // Works with no erros!!!

median(evenLengthArray); // Works with no erros!!!


// Here i just copied the tests from the test.js file to make sure the code works fine and passes on all of them :)

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}


// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)