
/*
    The Event Loop

    JavaScript is single threaded, so to make it possible to use things such as async APIs, intervals, timeouts, etc - it uses event loop - which is essentially a queue of events to happen
*/

console.log('Start');
setTimeout(() => {
    console.log('Timeout callback');
}, 0);
console.log('End');

// Now - what is the order of operations?
// Interestingly, it will be the "Start" console log, the "End" console log, and then the "Timeout callback" console log
// Amusing right - given the timeout is 0 ms

// It works like this because there are essentally two queues - the call stack and the Web/Node API queue

// Let's look at the code:
// - console.log('Start'); - is added to the call stack and executed immediately, so "Start" is logged
// - setTimeout(...) - is added to the call stack, but it is an async API, so it is sent to the Web/Node API queue and the callback is registered to be called after 0 ms
//   - Important - after it is called, this line of code of execution is finished - meaning we are moving on the next line
//   - So that's why the setTimeout(...) execution simply just adds the callback to the Web/Node API queue and then moves on to the next line of code
// - console.log('End'); - is added to the call stack and executed immediately, so "End" is logged
// - Now, after the call stack is empty (after "End" is logged), the event loop checks the Web/Node API queue
//   - It finds the call stack is empty - it can now execute things from the Web/Node API queue

