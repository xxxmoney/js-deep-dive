
/*
    Microtasks

    They are the second sub queue in the secondary queue
    They consist of Promise.then, queueMicrotask, MutationObserver, etc
    Basically "jobs"
*/

console.log("Start");
setTimeout(() => console.log("Timeout 01"), 0);
Promise.resolve().then(() => console.log("Promise 01"));
setTimeout(() => console.log("Timeout 02"), 0);
Promise.resolve().then(() => console.log("Promise 02"));
console.log("End");

// Now, how will the order for this execution be?

// As we know, we firstly have the main queue (the "code") - so the console.logs
// Then we go to secondary queue
// In which we firstly have the Microtasks execution - so the Promise.then's callbacks are executed
// After this, we have the Macrotasks execution - so the setTimeout's callbacks are executed

/*
    So the order will be:
        Start
        End
        Promise 01
        Promise 02
        Timeout 01
        Timeout 02
*/

// Btw, the "freezing" can also happen because of Microtasks
// In previous example, we had a while true - which was blocking the main queue
// We can also block the secondary Microtasks queue - if the Microtask - Promise.then - calls another Promise.then - it keeps adding more to the Microtask queue - meaning the Macrotasks will never get executed
// This WON'T block the main code, but it will blocks the Macrotasks - like setTimeout, DOM events, etc

