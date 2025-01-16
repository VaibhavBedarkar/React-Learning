// Currying example in JavaScript

/**
 * Currying is a technique in functional programming where a function is transformed into a sequence of functions,
 * each taking a single argument. It allows partial application of functions, enabling the creation of new functions
 * by fixing some arguments of the original function.
 */

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6

let a = "Vaibhav";

function sum(a){

    return (b) =>{
        return (c) =>{
            return a+b+c;
        }
    }
}

console.log(sum(1)(2)(3));
