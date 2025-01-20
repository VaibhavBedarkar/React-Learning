//Proxy and Reflect in ES6
//Proxy is a new feature in ES6 which allows you to wrap an object and intercept operations on it.
//The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.
//The Reflect object is used to call the corresponding method of the target object.
// // Example of Proxy and Reflect
//
const handler = {
    get: function(target, prop) {
        return prop in target ? target[prop] : 'Property does not exist';
    }
};

const obj = {
    name: 'Alice'
};

const proxy = new Proxy(obj, handler);

console.log(proxy.name); // Alice
console.log(proxy.age); // Property does not exist
//
// // Reflect example
//
const person = {
    name: 'Alice',
    age: 30
};

console.log(Reflect.get(person, 'name')); // Alice
console.log(Reflect.get(person, 'age')); // 30
// In this example, we have a handler object with a get method that intercepts property access on the target object.
// We create a Proxy object with the target object and the handler object.
// When we access the name property on the proxy object, it returns the value from the target object.
// When we access the age property, which does not exist on the target object, it returns a custom message.
// We can also use the Reflect object to call the get method on the target object directly.
// This allows us to access properties on the target object without going through the proxy.
// The Proxy and Reflect objects provide a powerful way to intercept and handle object operations in JavaScript.
//