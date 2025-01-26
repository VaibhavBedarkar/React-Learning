const person = {
    firstName: "Vaibhav",
    lastName: "Bedarkar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const anotherPerson = {
    firstName: "Viraj",
    lastName: "Bedarkar"
};

// Using call
// call allows us to use the method of one object in another object
console.log(person.fullName.call(anotherPerson)); 
// Output: Viraj Bedarkar

// Using apply
// apply is similar to call, but it takes an array of arguments
console.log(person.fullName.apply(anotherPerson)); 
// Output: Viraj Bedarkar

// Using bind
// bind creates a new function that, when called, has its 'this' keyword set to the provided value
const boundFullName = person.fullName.bind(anotherPerson);
console.log(boundFullName()); 
// Output: Viraj Bedarkar