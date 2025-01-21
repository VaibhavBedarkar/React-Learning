//Pollyfills for Array and String methods
// Polyfills are code that adds a feature to a browser that the browser does not inherently support.
// Polyfills are used to make sure that your code works on all browsers, even if they do not support the latest features of JavaScript.

// Polyfill for Array.prototype.map
if (!Array.prototype.map) {
    Array.prototype.map = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.map called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var A = new Array(len);
        var k = 0;
        while (k < len) {
            if (k in O) {
                A[k] = callback.call(thisArg, O[k], k, O);
            }
            k++;
        }
        return A;
    };
}
// example of Array.prototype.map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


// Polyfill for Array.prototype.filter
if (!Array.prototype.filter) {
    Array.prototype.filter = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.filter called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var res = [];
        var k = 0;
        while (k < len) {
            if (k in O) {
                var val = O[k];
                if (callback.call(thisArg, val, k, O)) {
                    res.push(val);
                }
            }
            k++;
        }
        return res;
    };
}
// example of Array.prototype.filter

const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2, 4]



// Polyfill for Array.prototype.reduce
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function(callback, initialValue) {
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var k = 0;
        var accumulator;
        if (arguments.length > 1) {
            accumulator = initialValue;
        } else {
            while (k < len && !(k in O)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            accumulator = O[k++];
        }
        while (k < len) {
            if (k in O) {
                accumulator = callback(accumulator, O[k], k, O);
            }
            k++;
        }
        return accumulator;
    };
}
// example of Array.prototype.reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


// Polyfill for String.prototype.includes
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

// Polyfill for String.prototype.trim
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

// Polyfill for String.prototype.trimStart
if (!String.prototype.trimStart) {
    String.prototype.trimStart = function() {
        return this.replace(/^\s+/, '');
    }
}

// Polyfill for String.prototype.trimEnd
if (!String.prototype.trimEnd) {
    String.prototype.trimEnd = function() {
        return this.replace(/\s+$/, '');
    }
}

// Polyfill for Array.prototype.findIndex
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError(predicate + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var k = 0;
        while (k < len) {
            var kValue = O[k];
            if (predicate.call(thisArg, kValue, k, O)) {
                return k;
            }
            k++;
        }
        return -1;
    };
}

// Polyfill for String.prototype.startsWith
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, start) {
        start = start || 0;
        return this.indexOf(search, start) === start;
    };
}

// Polyfill for String.prototype.endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}
// Polyfill for Array.prototype.find
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError(predicate + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var k = 0;
        while (k < len) {
            var kValue = O[k];
            if (predicate.call(thisArg, kValue, k, O)) {
                return kValue;
            }
            k++;
        }
        return undefined;
    };
}

// Polyfill for Array.prototype.some
if (!Array.prototype.some) {
    Array.prototype.some = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var k = 0;
        while (k < len) {
            if (k in O && callback.call(thisArg, O[k], k, O)) {
                return true;
            }
            k++;
        }
        return false;
    };
}

// Polyfill for Array.prototype.every
if (!Array.prototype.every) {
    Array.prototype.every = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Array.prototype.every called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        var k = 0;
        while (k < len) {
            if (k in O && !callback.call(thisArg, O[k], k, O)) {
                return false;
            }
            k++;
        }
        return true;
    };
}

// Polyfill for String.prototype.repeat
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        if (this == null) {
            throw new TypeError('String.prototype.repeat called on null or undefined');
        }
        count = Math.floor(count);
        if (count < 0 || count === Infinity) {
            throw new RangeError('Invalid count value');
        }
        var str = String(this);
        var result = '';
        for (var i = 0; i < count; i++) {
            result += str;
        }
        return result;
    };
}

// Polyfill for String.prototype.padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function(targetLength, padString) {
        targetLength = targetLength >> 0; // truncate if number or convert non-number to 0
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}

// Polyfill for String.prototype.padEnd
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function(targetLength, padString) {
        targetLength = targetLength >> 0; // truncate if number or convert non-number to 0
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0, targetLength);
        }
    };
}