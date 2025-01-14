// Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
// It works with projects using Babel, TypeScript, Node, React, Angular, Vue, and more.

// To get started with Jest, you need to install it using npm or yarn:
// npm install --save-dev jest

// Once installed, you can create a test file. Jest will look for files with .test.js or .spec.js extensions.

// Import the function to be tested
const sum = (a, b) => a + b;

// Write a test suite
describe('sum function', () => {
    // Write a test case
    test('adds 1 + 2 to equal 3', () => {
        // Use an assertion to check the result
        expect(sum(1, 2)).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        expect(sum(5, 5)).toBe(10);
    });
});

// To run the tests, you can add a script to your package.json:
// "scripts": {
//   "test": "jest"
// }

// Then run the tests using:
// npm test
// or
// yarn test

// Jest will automatically find and run all test files in your project.