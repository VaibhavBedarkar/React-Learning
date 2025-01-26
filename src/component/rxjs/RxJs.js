// Getting started with RxJs in React

// RxJs is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators to allow you to compose complex asynchronous pipelines. RxJS can be used both in the browser or in the server-side using Node.js.


// Installation
// To install RxJs in your React project, run the following command:
// npm install rxjs


// 1. Creating Observables
// An Observable is a representation of any set of values over any amount of time. 
// You can create an Observable using the Observable.create() method, passing in a function that defines the sequence of values over time.

// Example: Creating an Observable that emits a sequence of numbers
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
}
);

observable.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Observable complete')
});

// Output:
// 1
// 2
// 3
// Observable complete

