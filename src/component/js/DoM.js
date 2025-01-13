// DoM.js

// Document Object Model (DOM) is a programming interface for web documents.
// It represents the page so that programs can change the document structure, style, and content.

// Common DOM Methods and JS Selectors

// 1. getElementById
// Use case: Select an element by its ID
// Pros: Fast and straightforward
// Cons: Can only select one element
const elementById = document.getElementById('exampleId');
console.log(elementById);

// 2. getElementsByClassName
// Use case: Select elements by their class name
// Pros: Can select multiple elements
// Cons: Returns a live HTMLCollection, which can be less performant
const elementsByClassName = document.getElementsByClassName('exampleClass');
console.log(elementsByClassName);

// 3. getElementsByTagName
// Use case: Select elements by their tag name
// Pros: Can select multiple elements
// Cons: Returns a live HTMLCollection
const elementsByTagName = document.getElementsByTagName('div');
console.log(elementsByTagName);

// 4. querySelector
// Use case: Select the first element that matches a CSS selector
// Pros: Very flexible, can use any CSS selector
// Cons: Only selects the first matching element
const firstElement = document.querySelector('.exampleClass');
console.log(firstElement);

// 5. querySelectorAll
// Use case: Select all elements that match a CSS selector
// Pros: Very flexible, can use any CSS selector
// Cons: Returns a static NodeList, which can be more performant
const allElements = document.querySelectorAll('.exampleClass');
console.log(allElements);

// Example usage in a function
function changeBackgroundColorById(id, color) {
    const element = document.getElementById(id);
    if (element) {
        element.style.backgroundColor = color;
    }
}

// Example usage in a function
function changeTextByClassName(className, text) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = text;
    }
}

// Example usage in a function
function hideElementsByTagName(tagName) {
    const elements = document.getElementsByTagName(tagName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}

// Example usage in a function
function addClassToFirstElement(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add(className);
    }
}

// Example usage in a function
function addClassToAllElements(selector, className) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.classList.add(className);
    });
}