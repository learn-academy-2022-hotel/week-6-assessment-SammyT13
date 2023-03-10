// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// Test 1:

describe('sentenceGenerator', () => {
  it ('takes in an array of objects and returns an array with a sentence about each person with their name capitalized', () => {
    expect(sentenceGenerator(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// sentenceGenerator
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)

// ● sentenceGenerator › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//   ReferenceError: sentenceGenerator is not defined

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Solution 1:

// Psuedocode:
// Function Signature
// input: an array of objects
// output: an array of strings

// input: const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Strategey: Create a function called sentenceGenerator, that takes in an array of objects as a parameter
// Inside the function
// Use the map method to iterate through the array of objects
// Create a variable to hold the value of the name after applying the split method
// Since the variable holds an array, I will apply the toUpperCase method to the first element and the first letter of the string and concat using the substr method, I will also apply those same methods to the second element of the variable.
// Return the array of strings for the variable and the object using string interpolation.

const sentenceGenerator = (array) => {
  return array.map(value => {
    let fullName = value.name.split(' ')
    fullName = fullName[0][0].toUpperCase() + fullName[0].substr(1) + ' ' + fullName[1][0].toUpperCase() + fullName[1].substr(1)

    return `${fullName} is ${value.occupation}.`
  })
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// sentenceGenerator
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// Test 2:

describe('numModuloThree', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    expect(numModuloThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numModuloThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// numModuloThree
//     ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

//   ● numModuloThree › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//     ReferenceError: numModuloThree is not defined

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

// Solution 2:

// Psuedocode
// Function Signature
// input: an array of mixed datatypes (strings, numbers, booleans)
// ouput: an array of numbers 

// input: const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// ouput: [ 2, 0, -1, 0 ]
// input: const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// ouput: [ 2, 1, -1 ]

// Strategy: create a function called numModuloThree that takes in an array
// Inside the function:
  // Use the filter method to find the number datatype
  // Use the map method to obtain modulo 3 of each number
  // return an array of numbers

const numModuloThree = (array) => {
  return array.filter(value => typeof value === 'number').map(value => value % 3)
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// numModuloThree
//     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// Test 3:

describe('cubeSum', () => {
  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// *** Good Test Failure *** //
// FAIL  ./code-challenges.test.js
// cubeSum
//     ✕ takes in an array of numbers and returns the sum of all the numbers cubed

//   ● cubeSum › takes in an array of numbers and returns the sum of all the numbers cubed

//     ReferenceError: cubeSum is not defined

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Solution 3:

// Psuedocode
// Function Signature
// input: array of numbers
// output: number

// input: const cubeAndSum1 = [2, 3, 4]
// output: 99

// input: const cubeAndSum2 = [0, 5, 10]
// output: 1125

// Strategy: create a function called cubeSum that takes in an array
// In the fucntion:
  // create a variable initialized at 0, this will hold the sum of the cubed number
  // Use the map filter to iterate each element in the array
    // add each cubed value to variable
  // return the variable

const cubeSum = (array) => {
  let sum = 0
  array.map(value => sum += value**3)
  
  return sum 
}

// *** Test Passed *** //
// PASS  ./code-challenges.test.js
// cubeSum
//     ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)
