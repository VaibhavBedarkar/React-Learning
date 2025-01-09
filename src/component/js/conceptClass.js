// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JavaScript are built on prototypes but also have some syntax and semantics that are unique to classes.

// Defining classes
// Classes can be defined in two ways: a class expression or a class declaration.

// Class Declaration
// A class declaration is a syntactic sugar over the prototype-based inheritance.
// It allows defining a class with a constructor and methods.
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter
    // Getters are used to access properties of an object.
    get area() {
        return this.calcArea();
    }

    // Method
    // Methods are functions that belong to the class and can be called on instances of the class.
    calcArea() {
        return this.height * this.width;
    }

    // Generator method
    // Generator methods can be used to define a sequence of values.
    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}

// Class Expression; the class is anonymous but assigned to a variable
// Class expressions can be named or unnamed. They are useful when you need to define a class in a limited scope.
const RectangleExpr = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Class Expression; the class has its own name
// Named class expressions can be useful for debugging purposes.
const RectangleExprNamed = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Static methods and fields
// Static methods and fields are defined on the class itself, not on instances of the class.
// They are often used for utility functions or constants.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

// Private properties
// Private properties are declared with a # prefix and can only be accessed within the class.
// They help encapsulate the internal state of the class.
class RectangleWithPrivate {
    #height = 0;
    #width;
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}

// Inheritance
// The extends keyword is used to create a class that is a child of another class.
// The super keyword is used to call the constructor of the parent class.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Example usage
const square = new Rectangle(10, 10);
console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.