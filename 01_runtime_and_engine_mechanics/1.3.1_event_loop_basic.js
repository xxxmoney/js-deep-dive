
/*
    The Event Loop

    JavaScript is single threaded, so to make it possible to use things such as async APIs, intervals, timeouts, etc - it uses event loop - which is essentially a queue of events to happen
    The mechanism itself is the Event Loop - to prioritize execution from primary queue and then use secondary queue
    Primary queue - primary queue - where the main code is executed
    Secondary queue - is essentially two queues
        - Microtask Queue - Job queue
        - Macrotask Queue - Callback queue        

    The order is as follow:
        - Primary queue (the .js file code)
        - Microtask queue (Promise.then, queueMicrotask, MutationObserver, etc)
        - Macrotask queue (setTimeout, setInterval, DOM events, etc)

    So firstly execute all the "simple" code, then execute all jobs and then all callbacks
*/

console.log('Start');
setTimeout(() => {
    console.log('Timeout callback');
}, 0);
console.log('End');

// Now - what is the order of operations?
// Interestingly, it will be the "Start" console log, the "End" console log, and then the "Timeout callback" console log
// Amusing right - given the timeout is 0 ms

// It works like this because there are essentally two main queues

// Let's look at the code:
// - console.log('Start'); - is added to the primary queue and executed immediately, so "Start" is logged
// - setTimeout(...) - is added to the primary queue, but it is an async API, so it is sent to the secondary queue and the callback is registered to be called after 0 ms
//   - Important - after it is called, this line of code of execution is finished - meaning we are moving on the next line
//   - So that's why the setTimeout(...) execution simply just adds the callback to the secondary queue and then moves on to the next line of code
// - console.log('End'); - is added to the primary queue and executed immediately, so "End" is logged
// - Now, after the primary queue is empty (after "End" is logged), the event loop checks the secondary queue
//   - It finds the primary queue is empty - it can now execute things from the secondary queue

