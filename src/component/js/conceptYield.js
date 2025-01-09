// The yield keyword is used in generator functions to pause and resume execution.

class RectangleWithMethods {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
    // Generator method
    *getSides() {
        yield this.height; // Pauses here and returns the height
        yield this.width;  // Pauses here and returns the width
        yield this.height; // Pauses here and returns the height again
        yield this.width;  // Pauses here and returns the width again
    }
}

const square = new RectangleWithMethods(10, 10);
console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
