
/*
    Event Loop Blocking
*/

// We can block the secondary queue - simply by making sure the primary queue is never empty    
// This behavior also explains the "freezing" of browser - because the main queue (primary queue) is occupying the main thread

// We firstly set the timeout - this function call simply sets the callback to the secondary queue
setTimeout(() => {
    console.log('I am free!')
}, 0);

// We then start executing a loop over iterations on primary queue - it is occupied by this so it cannot run the timeout callback
const tickCount = 5_000_000_000;

let count = 0;
console.log("Loop start")
while (count < tickCount) {
    count++;
}
console.log("Loop finish")

// After this, the primary queue is empty so it can run the timeout callback

// The primary queue essentially contains this whole block of code - the whole main
// All the code has to be execuited to consider the primary queue empty - and only then the secondary queue can be executed
